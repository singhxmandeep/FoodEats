import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const token = req.headers.token;

    if (!token) {
        console.log('Authorization header missing');
        return res.status(401).json({ success: false, message: "Not Authorized, Login again" });
    }

    console.log('Token:', token); // Log the token for debugging

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log('Token verification failed:', error);
        return res.status(401).json({ success: false, message: "Invalid token" });
    }
};


export default authMiddleware;
