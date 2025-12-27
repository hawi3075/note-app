import express from 'express';
import cors from 'cors';
import pool from './src/config/db.config.js';

const app = express();
app.use(cors());
app.use(express.json());

// Get all notes for a user
app.get('/api/notes/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await pool.query('SELECT * FROM notes WHERE user_id = $1 ORDER BY created_at DESC', [userId]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new note
app.post('/api/notes', async (req, res) => {
  const { user_id, title, content, category } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO notes (user_id, title, content, category) VALUES ($1, $2, $3, $4) RETURNING *',
      [user_id, title, content, category]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));