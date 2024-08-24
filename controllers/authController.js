const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const register = async (req, res) => {
    try {
        const { name, username, email, password, role, address, phoneNumber } = req.body;

        // Check for missing fields
        if (!name || !username || !email || !password || !role || !address || !phoneNumber) {
            return res.status(400).json({
                message: "Registration failed",
                error: "All fields must be filled"
            });
        }

        const hash = await bcrypt.hash(password, 10); // Hashing the password
        const user = await User.create({
            name,
            username,
            email,
            password: hash,
            role,
            address,
            phoneNumber
        });

        res.status(201).json({
            message: "Success creating new user",
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            role: user.role,
            phoneNumber: user.phoneNumber,
            address: user.address
        });
    } catch (error) {
        // Provide more specific error message based on the type of error
        console.error(error);
        let errorMessage = "Registration failed";
        if (error.name === 'SequelizeUniqueConstraintError') {
            errorMessage = "A user with the given email or username already exists";
        }
        res.status(500).json({ message: errorMessage, error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        // Check both user existence and password validity together
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({
                error: "Unauthorized",
                message: "Invalid username/password"
            });
        }

        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            console.error('JWT secret is not defined!');
            return res.status(500).json({ message: "Login failed", error: "Server misconfiguration" });
        }

        const token = jwt.sign(
            { userId: user.id, username: user.username, role: user.role },
            jwtSecret,
            { expiresIn: '1h' }
        );

        res.json({
            accessToken: token,
            name: user.name,
            role: user.role,
            id: user.id
        });
    } catch (error) {
        res.status(500).json({ message: "Login failed", error: error.message });
    }
};

module.exports = { register, login };
