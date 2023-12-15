import Subject from '../models/subject.js';

export const createSubject = async (req, res) => {
    try {
      const subjects = req.body;
      if (!req.user) return res.status(401).json({ message: 'Unauthenticated.' });

      const subject = new Subject(subjects);
  
      await subject.save();
      // Return a success message or the created post
      return res.status(201).json(subject);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

export const getSubjects = async (req, res) => {
    try{
        if (!req.user) return res.status(401).json({ message: 'Unauthenticated.' });

        const subjects = await Subject.find();

        return res.status(201).json({subjects: subjects});

    }catch(error){
        return res.status(500).json({ message: error.message });
    }
}