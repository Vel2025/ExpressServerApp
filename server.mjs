import express from 'express';

const app = express();
const PORT = 3000 || 3001;








// Listened to our server
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
  });

