const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    // Extract the token from the 'accessToken' header
    const token = req.headers['accesstoken'];  // Note: headers are case-insensitive

    console.log("Received accessToken:", token); // Log the token for debugging

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
        req.userId = decoded.id; // Assuming your JWTs contain an 'id' in their payload
        next();
    });
};

module.exports = { verifyToken };
