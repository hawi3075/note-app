import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [category, setCategory] = useState('Personal');

  useEffect(() => {
    // Replace '1' with actual logged in user ID later
    axios.get('http://localhost:5000/api/notes/1')
      .then(res => setNotes(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ background: '#F4F7FF', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: 'auto' }}>
        <h2 style={{ display: 'flex', justifyContent: 'space-between' }}>
          Dashboard <span style={{fontSize: '1rem'}}>👤 User</span>
        </h2>

        {/* Categories from your image */}
        <div style={{ display: 'flex', gap: '10px', margin: '20px 0' }}>
          {['Personal', 'Work', 'Ideas'].map(cat => (
            <button 
              key={cat}
              onClick={() => setCategory(cat)}
              style={{
                padding: '10px 20px', borderRadius: '20px', border: 'none',
                background: category === cat ? '#2563EB' : '#FFF',
                color: category === cat ? '#FFF' : '#333', cursor: 'pointer'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Notes Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {notes.filter(n => n.category === category).map(note => (
            <div key={note.id} style={{ background: '#FFF', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
              <h4>{note.title}</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>{note.content}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                <span style={{ color: '#2563EB', fontSize: '0.8rem' }}>{note.category}</span>
                <button style={{ border: 'none', background: 'none' }}>✏️</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;