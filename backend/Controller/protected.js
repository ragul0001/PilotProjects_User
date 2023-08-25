// const express = require('express');
// const jwt = require('jsonwebtoken');
// const instructorModel = require("../model/instructor-model")
// const router = express.Router();
// const dotenv = require('dotenv')
// dotenv.config();

// //const secretKey = 'techtist-admin';

// // Middleware to validate JWT token and handle session timeout
// const authenticateToken = (req, res, next) => {
//     const token = req.headers.authorization?.split(' ')[1]; // Example: Bearer <token>
//     console.log("Protected Authenticate")
//     if (token) {
//         try {
//             // Verify the token
//             const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//             req.userId = decodedToken.userId; // Store the user ID in the request object

//             // Check if the user session is still active in the database
//             instructorModel.findByPk(decodedToken.userId)
//                 .then((user) => {
//                     if (!user) {
//                         console.log("User not found, treat it as a session timeout")
//                         // Clear the refresh token and access token cookies
//                         res.clearCookie('refreshToken', { httpOnly: true, sameSite: 'none', secure: true });
//                         res.clearCookie('accessToken', { httpOnly: true, sameSite: 'none', secure: true });
//                         // User not found, treat it as a session timeout
//                         return res.status(401).json({ error: 'Session timeout' });
//                     }
//                     console.log("User session is valid, continue to the protected route")
//                     // User session is valid, continue to the protected route
//                     next();
//                 })
//                 .catch((error) => {
//                     console.error(error + ': Internal server error');
//                     return res.status(500).json({ error: 'Internal server error' });
//                 });
//         } catch (error) {
//             console.error("Invalid token : " + error);
//             return res.status(401).json({ error: 'Invalid token' });
//         }
//     } else {
//         return res.status(401).json({ error: 'Missing token' });
//     }
// };

// // Protected route that requires authentication and handles session timeout
// router.get('/protected', authenticateToken, (req, res) => {
//     // Handle the protected route logic here
//     res.json({ message: 'Protected route' });
// });

// module.exports = router;