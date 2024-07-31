import User from "../models/UserModel.js";
import bcrypt from 'bcrypt'

export const getLoginDetails = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if(!user) {
            return res.status(404).json({ message: "Wrong Credentials" });
        }
        const isPasswordMatch = await bcrypt.compare(password, user?.password || '');
        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Wrong Credentials" });
        }

        res.status(200).json(user);


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export const getSignUpDetails = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const user = await User.findOne({ username });
        if (user) {
            return res.status(409).json({ message: "Username already exists" });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }

        const existingEmail = await User.findOne({ email: email});
        if (existingEmail) {
            return res.status(409).json({ message: "Email already exists" });
        }

        if(password.length < 6){
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(200).json({
            userId: newUser._id,
            username: newUser.username,
            email: newUser.email
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}