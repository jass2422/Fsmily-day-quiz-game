import { useState } from 'react';

export default function StartPage({ onStart, onBoard }) {
  const [name, setName] = useState('');
  const [err, setErr] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const n = name.trim();
    if (!n) return setErr('Please enter your name to start.');
    onStart(n);
  };

  return (
    <form className="page" onSubmit={submit}>
      <h1>
        TCS Family Day
        <br />
        <b>Guess the Tata Brand</b>
      </h1>
      <p className="sub">120 seconds · 4 choices · how many can you get right?</p>
      <input
        className="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        autoComplete="off"
        autoFocus
      />
      <div className="err">{err}</div>
      <div className="row">
        <button type="submit">Start</button>
        <button type="button" className="grey" onClick={onBoard}>
          Leaderboard
        </button>
      </div>
    </form>
  );
}
