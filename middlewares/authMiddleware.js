const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.get("token");
    // const authHeader = req.headers['authorization'];
    // const token = authHeader && authHeader.split(' ')[1]; // More robust handling of the token extraction

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({
                message: "Failed to authenticate token",
                error: err.message, // Providing error message from jwt.verify for more detail
            });
        }
        req.userId = decoded.id; // Assuming your JWTs contain an 'id' in their payload
        next();
    });
};

module.exports = { verifyToken };
