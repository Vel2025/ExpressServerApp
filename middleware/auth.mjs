const auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      req.user = { id: 'guest' };
    } else {
      req.user = { id: 'authenticated-user' };
    }
    next();
  };
  
  export default auth;