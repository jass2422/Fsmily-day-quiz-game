import { sortBoard } from '../game.js';

const MEDALS = ['🥇', '🥈', '🥉'];

export default function Leaderboard({ board, last, onBack, onClear }) {
  const sorted = sortBoard(board);
  const top = sorted.slice(0, 15);
  const players = board.length;
  const topScore = sorted[0]?.score ?? 0;
  const avgScore = players ? Math.round(board.reduce((s, e) => s + e.score, 0) / players) : 0;
  const avgAcc = players ? Math.round(board.reduce((s, e) => s + e.accuracy, 0) / players) : 0;
  const answers = board.reduce((s, e) => s + e.answered, 0);
  const bestStreak = board.reduce((m, e) => Math.max(m, e.bestStreak), 0);

  return (
    <div className="page board-page">
      <h1>
        Leaderboard <b>Dashboard</b>
      </h1>

      <div className="cards">
        <div className="card"><b>{players}</b><span>Players</span></div>
        <div className="card"><b>{topScore}</b><span>Top score</span></div>
        <div className="card"><b>{avgScore}</b><span>Average score</span></div>
        <div className="card"><b>{avgAcc}%</b><span>Avg accuracy</span></div>
        <div className="card"><b>{bestStreak}</b><span>Best streak</span></div>
        <div className="card"><b>{answers}</b><span>Questions answered</span></div>
      </div>

      <div className="board-grid">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score</th>
              <th>Correct</th>
              <th>Accuracy</th>
              <th>Streak</th>
            </tr>
          </thead>
          <tbody>
            {top.length === 0 && (
              <tr>
                <td colSpan="6" className="empty">No scores yet</td>
              </tr>
            )}
            {top.map((e, i) => (
              <tr key={e.id} className={last && e.id === last.id ? 'me' : ''}>
                <td>{i < 3 ? <span className="medal">{MEDALS[i]}</span> : i + 1}</td>
                <td>{e.name}</td>
                <td><b>{e.score}</b></td>
                <td>{e.correct}/{e.answered}</td>
                <td>{e.accuracy}%</td>
                <td>{e.bestStreak}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="bars">
          <h3>Top 5 scores</h3>
          {sorted.slice(0, 5).map((e) => (
            <div key={e.id} className="barrow">
              <span className="bname">{e.name}</span>
              <div className="btrack">
                <div className="bfill" style={{ width: `${topScore ? (e.score / topScore) * 100 : 0}%` }} />
              </div>
              <span className="bval">{e.score}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="row">
        <button onClick={onBack}>New Game</button>
        <button className="grey" onClick={onClear}>Clear Scores</button>
      </div>
    </div>
  );
}
