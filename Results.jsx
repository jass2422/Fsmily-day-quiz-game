export default function Results({ entry, rank, total, onRestart, onBoard }) {
  if (!entry) return null;
  return (
    <div className="page">
      <h1>
        Great game, <b>{entry.name}</b>!
      </h1>

      <div className="big-score">
        <span>{entry.score}</span>
        <small>points</small>
      </div>

      <div className="stats">
        <div><b>{entry.correct}</b><span>Correct</span></div>
        <div><b>{entry.answered}</b><span>Answered</span></div>
        <div><b>{entry.accuracy}%</b><span>Accuracy</span></div>
        <div><b>{entry.bestStreak}</b><span>Best streak</span></div>
      </div>

      <p className="sub">
        You are ranked <b>#{rank}</b> of {total} players
      </p>

      <div className="row">
        <button onClick={onRestart}>Next Participant</button>
        <button className="grey" onClick={onBoard}>Leaderboard</button>
      </div>
    </div>
  );
}
