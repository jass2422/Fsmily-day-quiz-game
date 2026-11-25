import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import BrandBadge from './BrandBadge.jsx';
import { GAME_SECONDS, POINTS, accuracyOf, buildQuestions, fmt, streakBonus } from '../game.js';

const FEEDBACK_MS = 800;

export default function GamePage({ player, onFinish }) {
  const questions = useMemo(() => buildQuestions(), []);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState(null);
  const [remaining, setRemaining] = useState(GAME_SECONDS);
  const [stats, setStats] = useState({ score: 0, correct: 0, answered: 0, streak: 0, bestStreak: 0 });

  const statsRef = useRef(stats);
  const remRef = useRef(GAME_SECONDS);
  const doneRef = useRef(false);
  const lockRef = useRef(false);
  const nextRef = useRef(null);

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    const s = statsRef.current;
    onFinish({
      score: s.score,
      correct: s.correct,
      answered: s.answered,
      accuracy: accuracyOf(s.correct, s.answered),
      bestStreak: s.bestStreak,
    });
  }, [onFinish]);

  // countdown
  useEffect(() => {
    const t = setInterval(() => {
      remRef.current -= 1;
      setRemaining(Math.max(remRef.current, 0));
      if (remRef.current <= 0) {
        clearInterval(t);
        finish();
      }
    }, 1000);
    return () => {
      clearInterval(t);
      clearTimeout(nextRef.current);
    };
  }, [finish]);

  // all questions used up before time ran out
  useEffect(() => {
    if (idx >= questions.length) finish();
  }, [idx, questions.length, finish]);

  const q = questions[idx];

  const answer = (opt) => {
    if (!q || lockRef.current || doneRef.current) return;
    lockRef.current = true;
    const ok = opt.id === q.answer;
    const s = statsRef.current;
    const streak = ok ? s.streak + 1 : 0;
    const next = {
      score: s.score + (ok ? POINTS[q.level] + streakBonus(streak) : 0),
      correct: s.correct + (ok ? 1 : 0),
      answered: s.answered + 1,
      streak,
      bestStreak: Math.max(s.bestStreak, streak),
    };
    statsRef.current = next;
    setStats(next);
    setPicked(opt.id);

    nextRef.current = setTimeout(() => {
      if (doneRef.current) return;
      setPicked(null);
      lockRef.current = false;
      setIdx((i) => i + 1);
    }, FEEDBACK_MS);
  };

  const optionClass = (o) => {
    if (!picked) return 'option';
    if (o.id === q.answer) return 'option right';
    if (o.id === picked) return 'option wrong';
    return 'option dim';
  };

  return (
    <div className="page game-page">
      <div className="bar">
        <span>👤 {player}</span>
        <span>Score <b>{stats.score}</b></span>
        <span>🔥 Streak <b>{stats.streak}</b></span>
        <span>🎯 {accuracyOf(stats.correct, stats.answered)}%</span>
        <span className={`timer ${remaining <= 15 ? 'low' : ''}`}>{fmt(remaining)}</span>
      </div>
      <div className="progress">
        <div className={remaining <= 15 ? 'low' : ''} style={{ width: `${(remaining / GAME_SECONDS) * 100}%` }} />
      </div>

      {q && (
        <>
          <div className="qcard">
            <span className={`level ${q.level}`}>
              {q.level} · {POINTS[q.level]} pts
            </span>
            <h2>Which Tata brand is this?</h2>
            <p className="clue">{q.clue}</p>
          </div>

          <div className="options">
            {q.options.map((o) => (
              <button key={o.id} className={optionClass(o)} disabled={!!picked} onClick={() => answer(o)}>
                <BrandBadge brand={o} size={52} />
                <span>{o.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
