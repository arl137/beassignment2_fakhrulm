const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers['accesstoken'];

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({
                error: "Unauthorized",
                message: "Please login first",
            });
        }
        req.userId = decoded.id;
        next();
    });
};

module.exports = { verifyToken };
