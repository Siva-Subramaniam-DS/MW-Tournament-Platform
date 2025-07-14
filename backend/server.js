const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();

const allowedOrigins = [
  'https://mw-tournament-47a145.netlify.app',
  // add other allowed origins if needed
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true, // if you use cookies or authentication
}));
app.use(express.json());

const organizers = JSON.parse(process.env.AUTHORIZED_ORGANIZERS || '{}');
const SECRET = process.env.JWT_SECRET || 'your-very-secret-key';

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (organizers[username] && organizers[username] === password) {
    // Issue a JWT token
    const token = jwt.sign({ username, role: 'organizer' }, SECRET, { expiresIn: '2h' });
    return res.json({ token });
  }
  return res.status(401).json({ error: 'Invalid credentials' });
});

app.get('/api/protected', (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'No token' });
  const token = auth.split(' ')[1];
  try {
    const decoded = jwt.verify(token, SECRET);
    return res.json({ message: 'Protected data', user: decoded });
  } catch (e) {
    return res.status(401).json({ error: 'Invalid token' });
  }
});

app.listen(5000, () => console.log('Backend running on port 5000')); 
