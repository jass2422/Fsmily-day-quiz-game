import { BRANDS } from './data/brands.js';
import { QUESTIONS } from './data/questions.js';

export const GAME_SECONDS = 120;
export const POINTS = { easy: 10, medium: 20, hard: 30 };
const STORE_KEY = 'tcs_family_day_brand_quiz_v1';

export const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// random question order + random answer positions
export function buildQuestions() {
  return shuffle(QUESTIONS).map(([answer, level, clue, wrong], i) => ({
    key: i,
    answer,
    level,
    clue,
    options: shuffle([answer, ...wrong]).map((id) => BRANDS[id]),
  }));
}

// +2 points for every correct answer in a row beyond the 2nd (max +10)
export const streakBonus = (streak) => (streak >= 3 ? Math.min(streak - 2, 5) * 2 : 0);

export const accuracyOf = (correct, answered) => (answered ? Math.round((correct / answered) * 100) : 0);

export const sortBoard = (list) =>
  [...list].sort((a, b) => b.score - a.score || b.accuracy - a.accuracy || b.bestStreak - a.bestStreak);

export function loadBoard() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) || [];
  } catch {
    return [];
  }
}
export function saveBoard(list) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(list));
  } catch {
    /* ignore */
  }
}
