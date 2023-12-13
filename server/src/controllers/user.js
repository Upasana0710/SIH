import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';

export const register = async (req, res) => {
    const {email, password} = req.body;

    try{
        const existingUser = await User.findOne({email});

        if(existingUser) return res.json({message: "User already exists."});

        const hashPassword = await bcrypt.hash(password,12);
        const result = await User.create({ email: email, password: hashPassword, name: req.body.name, instituteEmail: req.body?.instituteEmail, dob: req.body.dob, gender: req.body.gender, city: req.body?.city, phone: req.body.phone, programme: req.body.programme, branch: req.body.branch })
        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "24h"});
        res.status(201).json({result: result, token});

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const login = async(req, res) => {

    const {email, password} = req.body;

    try{
        const existingUser = await User.findOne({email});

        if(!existingUser) return res.json({message: "User doesn't exist."});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.json({message: "Invalid credentials"});

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, 'test', {expiresIn: "24h"});

        res.status(200).json({result: existingUser, token});
    }catch(error){
        res.status(500).json({message: 'Could not sign in.'});
    }
}

export const addSubjects = async(req, res) => {

    const subjects = req.body;
    try{
        if (!req.user) return res.status(401).json({ message: 'Unauthenticated.' });
        const user = await User.findById(req.user);

        if (subjects.studySub) {
            user.studySub = [...user.studySub, ...subjects.studySub];
        }

        if (subjects.teachSub) {
            user.teachSub = [...user.teachSub, ...subjects.teachSub];
        }

        const updatedUser = await user.save();

        res.json(updatedUser);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

export const updateUser = async (req, res) => {
    const user = req.body;
    const { id } = req.params;
    
    try {
      const updatedUser = await User.findByIdAndUpdate(id, { ...user, id }, { new: true });
  
      res.json(updatedUser);
    } catch (error) {
      console.log(error);
    }
  };