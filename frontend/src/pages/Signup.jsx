import React from 'react';

const Signup = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#FFF' }}>
      <div style={{ width: '350px', textAlign: 'center' }}>
        <div style={{ background: '#E0E7FF', width: '50px', height: '50px', margin: 'auto', borderRadius: '10px' }}>📄</div>
        <h2>Create Account</h2>
        <p style={{ color: '#666' }}>Start organizing your thoughts today.</p>
        
        <input style={inputStyle} type="text" placeholder="Full Name" />
        <input style={inputStyle} type="email" placeholder="Email Address" />
        <input style={inputStyle} type="password" placeholder="Password" />
        
        <button style={{ width: '100%', padding: '15px', background: '#2563EB', color: '#FFF', border: 'none', borderRadius: '10px', marginTop: '20px' }}>
          Sign Up
        </button>
        <p>Already have an account? <a href="/login">Log In</a></p>
      </div>
    </div>
  );
};

const inputStyle = { width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: '1px solid #DDD' };
export default Signup;