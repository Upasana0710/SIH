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

        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials"});

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, 'test', {expiresIn: "24h"});

        res.status(200).json({result: existingUser, token});
    }catch(error){
        res.status(500).json({message: 'Could not sign in.'});
    }
}