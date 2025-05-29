const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract token from Bearer header
  if (!token) return res.sendStatus(401); // Unauthorized if token is missing

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden if token is invalid
    req.user = user; // Attach user info to the request object
    next(); // Proceed to the next middleware or route handler
  });
};

module.exports = authenticateToken;
