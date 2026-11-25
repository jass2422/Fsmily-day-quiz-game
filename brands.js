// [id, display name, monogram letters, badge colour]
// To use a real logo, save it as public/logos/brands/<id>.png  (e.g. tcs.png)
const RAW = [
  ['tcs', 'TCS', 'TCS', '#1d4ed8'],
  ['motors', 'Tata Motors', 'TM', '#0f766e'],
  ['steel', 'Tata Steel', 'TS', '#475569'],
  ['power', 'Tata Power', 'TP', '#d97706'],
  ['titan', 'Titan', 'Ti', '#0e7490'],
  ['tanishq', 'Tanishq', 'Tq', '#be185d'],
  ['taj', 'Taj Hotels', 'Taj', '#a16207'],
  ['airindia', 'Air India', 'AI', '#b91c1c'],
  ['vistara', 'Vistara', 'Vi', '#6d28d9'],
  ['tataplay', 'Tata Play', 'TPl', '#7c3aed'],
  ['voltas', 'Voltas', 'Vo', '#0369a1'],
  ['westside', 'Westside', 'Ws', '#15803d'],
  ['zudio', 'Zudio', 'Zu', '#c2410c'],
  ['fastrack', 'Fastrack', 'Fa', '#ca8a04'],
  ['croma', 'Croma', 'Cr', '#4d7c0f'],
  ['bigbasket', 'BigBasket', 'BB', '#16a34a'],
  ['tatatea', 'Tata Tea', 'TT', '#9a3412'],
  ['salt', 'Tata Salt', 'Sa', '#2563eb'],
  ['tetley', 'Tetley', 'Te', '#dc2626'],
  ['sampann', 'Tata Sampann', 'Sm', '#65a30d'],
  ['starbucks', 'Tata Starbucks', 'Sb', '#047857'],
  ['jlr', 'Jaguar Land Rover', 'JLR', '#334155'],
  ['tatacomm', 'Tata Communications', 'TC', '#0891b2'],
  ['tataneu', 'Tata Neu', 'Ne', '#9333ea'],
  ['tatacliq', 'Tata CLiQ', 'CLiQ', '#db2777'],
  ['tata1mg', 'Tata 1mg', '1mg', '#e11d48'],
  ['tataaia', 'Tata AIA', 'AIA', '#ea580c'],
  ['tatacapital', 'Tata Capital', 'Cap', '#1e40af'],
  ['elxsi', 'Tata Elxsi', 'Elx', '#4f46e5'],
  ['tatatech', 'Tata Technologies', 'TTe', '#0d9488'],
  ['tataprojects', 'Tata Projects', 'TPr', '#78716c'],
  ['tataelectronics', 'Tata Electronics', 'TEl', '#7e22ce'],
  ['tataadvanced', 'Tata Advanced Systems', 'TAS', '#1e3a8a'],
  ['tatasons', 'Tata Sons', 'TSn', '#111827'],
];

export const BRANDS = Object.fromEntries(
  RAW.map(([id, name, short, color]) => [id, { id, name, short, color }])
);
