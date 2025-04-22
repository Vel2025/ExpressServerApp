const auth = (req, res, next) => {
  // Simulate authentication check
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    req.user = { id: 'guest' }; // Default guest user
  } else {
    req.user = { id: 'authenticated-user' };
  }
  next();
};
export default auth;