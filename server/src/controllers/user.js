import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import Booking from '../models/booking.js';
import Subject from '../models/subject.js';

export const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(401).json({ message: 'User already exists.' });

    const hashPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email: email,
      password: hashPassword,
      name: req.body.name,
      instituteEmail: req.body?.instituteEmail,
      dob: req.body.dob,
      gender: req.body.gender,
      city: req.body?.city,
      phone: req.body.phone,
      programme: req.body.programme,
      branch: req.body.branch,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, 'test', {
      expiresIn: '24h',
    });
    res.status(201).json({ result: result, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res
        .status(401)
        .json({ message: 'UNAUTHORIZED: Invalid credentials' });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      'test',
      { expiresIn: '24h' }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Could not sign in.' });
  }
};

export const getUserSubjects = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthenticated.' });

    const user = await User.findById(req.user);
    const userStudySubs = [];
    const userTeachSubs = [];

    for (const subject of user.studySub) {
      const subjectDetails = await Subject.findById(subject._id);
      userStudySubs.push(subjectDetails);
    }

    for (const subject of user.teachSub) {
      const subjectDetails = await Subject.findById(subject._id);
      userTeachSubs.push(subjectDetails);
    }

    return res
      .status(200)
      .json({ studySubjects: userStudySubs, teachSubjects: userTeachSubs });
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
};

export const addSubjects = async (req, res) => {
  const subjects = req.body;
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthenticated.' });

    const user = await User.findById(req.user);

    // Add subjects to user schema
    if (subjects.studySub) {
      user.studySub = [...subjects.studySub];
    }

    if (subjects.teachSub) {
      user.teachSub = [...subjects.teachSub];
    }

    // Update user schema
    const updatedUser = await user.save();

    // Add user ID to subject schema
    const addUserIdToSubject = async (subjectId, userId, field) => {
      await Subject.findByIdAndUpdate(
        subjectId,
        { $addToSet: { [field]: userId } },
        { new: true }
      );
    };

    // Add user ID to corresponding subjects
    for (const studySubId of subjects.studySub) {
      await addUserIdToSubject(studySubId, user._id, 'students');
    }

    for (const teachSubId of subjects.teachSub) {
      await addUserIdToSubject(teachSubId, user._id, 'teachers');
    }

    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const user = req.body;
  const { id } = req.params;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { ...user, id },
      { new: true }
    );

    res.json(updatedUser);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

export const getByToken = async (req, res) => {
  if (!req.user) return res.status(401).json({ message: 'Unauthenticated.' });
  try {
    const user = await User.findById(req.user);
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

export const searchUser = async (req, res) => {
  const query = req.query.name;
  try {
    const users = await User.find({
      name: { $regex: query, $options: 'i' },
    })
      .sort({ teachRating: -1 }) // Sort by teacher rating in descending order
      .limit(10); // Limit the results to 10 users

    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export const createSlots = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthenticated.' });

    const { day, time } = req.body;

    const user = await User.findById(req.user);

    const existingSlot = user.slots?.find((slot) => slot.day === day);

    // Create a new slot object
    if (existingSlot) {
      // If the day already exists, add the new time to the existing day
      existingSlot.time.push(time);
    } else {
      // If the day doesn't exist, create a new slot object for the day
      user.slots.push({
        day,
        time: [time],
      });
    }

    // Save the updated user
    await user.save();
    return res.status(201).json({ message: 'Slot created successfully', user });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const getTeacherSlots = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthenticated.' });
    const { teacherId } = req.body;
    const today = new Date();
    const nextMonth = new Date(today);
    nextMonth.setMonth(today.getMonth() + 1);

    // Find the teacher by ID
    const teacher = await User.findById(teacherId);

    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found.' });
    }

    // Extract and format existing slots of the teacher for the next month
    const slots = generateTeacherSlots(teacher.slots, today, nextMonth);

    // Find bookings for the specified teacher within the next month
    const bookings = await Booking.find({
      teacher: teacherId,
      slot: { $gte: today.toISOString(), $lt: nextMonth.toISOString() },
    });

    // Update the slots array to mark booked slots as unavailable
    bookings.forEach((booking) => {
      const bookedSlotIndex = slots.findIndex(
        (slot) => slot.time === booking.slot
      );
      if (bookedSlotIndex !== -1) {
        slots[bookedSlotIndex].available = false;
      }
    });

    return res.status(200).json(slots);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error.' });
  }
};

const generateTeacherSlots = (teacherSlots, startDate, endDate) => {
  const slots = [];

  const currentDate = new Date(startDate);

  while (currentDate < endDate) {
    const daySlots = teacherSlots.find(
      (slot) => slot.day === getDayName(currentDate.getDay())
    );

    if (daySlots) {
      daySlots.time.forEach((time) => {
        slots.push({
          time: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
            parseInt(time.split('-')[0]),
            0
          ).toISOString(),
          available: true,
        });
      });
    }

    currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
  }

  return slots;
};

const getDayName = (dayIndex) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return days[dayIndex];
};

export const updateTeachRating = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthenticated.' });

    const user = await User.findById(req.body.teacherId);

    const { rating } = req.body;

    if (!user.teachRating) {
      // If no teachRating exists, create a new one
      user.teachRating = {
        rating: rating,
        total: '1',
      };
    } else {
      // Update existing teachRating
      const currentRating = parseInt(user.teachRating.rating) || 0;
      const currentTotal = parseInt(user.teachRating.total) || 0;

      const newRating =
        (currentRating * currentTotal + parseInt(rating)) / (currentTotal + 1);

      user.teachRating.rating = newRating.toString();
      user.teachRating.total = (currentTotal + 1).toString();
    }

    await user.save();

    return res.status(200).json({
      message: 'Teach rating updated successfully',
      teachRating: user.teachRating,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};
