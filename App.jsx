import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import StartPage from './components/StartPage.jsx';
import GamePage from './components/GamePage.jsx';
import Results from './components/Results.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import { loadBoard, saveBoard, sortBoard } from './game.js';

export default function App() {
  const [page, setPage] = useState('start'); // start | game | results | board
  const [player, setPlayer] = useState('');
  const [board, setBoard] = useState(loadBoard);
  const [last, setLast] = useState(null);

  const startGame = (name) => {
    setPlayer(name);
    setLast(null);
    setPage('game');
  };

  const finishGame = useCallback(
    (stats) => {
      const entry = {
        id: `${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
        name: player,
        ...stats,
        date: new Date().toISOString(),
      };
      setBoard((prev) => {
        const next = [...prev, entry];
        saveBoard(next);
        return next;
      });
      setLast(entry);
      setTimeout(() => setPage('results'), 400);
    },
    [player]
  );

  const clearBoard = () => {
    if (window.confirm('Clear ALL leaderboard scores?')) {
      saveBoard([]);
      setBoard([]);
      setLast(null);
    }
  };

  // keep the leaderboard fresh (e.g. when it is open on a second screen)
  useEffect(() => {
    if (page !== 'board') return undefined;
    const refresh = () => setBoard(loadBoard());
    const t = setInterval(refresh, 3000);
    window.addEventListener('storage', refresh);
    return () => {
      clearInterval(t);
      window.removeEventListener('storage', refresh);
    };
  }, [page]);

  const rank = last ? sortBoard(board).findIndex((e) => e.id === last.id) + 1 : 0;

  return (
    <div className="app">
      <Header />
      {page === 'start' && <StartPage onStart={startGame} onBoard={() => setPage('board')} />}
      {page === 'game' && <GamePage player={player} onFinish={finishGame} />}
      {page === 'results' && (
        <Results
          entry={last}
          rank={rank}
          total={board.length}
          onRestart={() => setPage('start')}
          onBoard={() => setPage('board')}
        />
      )}
      {page === 'board' && (
        <Leaderboard board={board} last={last} onBack={() => setPage('start')} onClear={clearBoard} />
      )}
    </div>
  );
}
