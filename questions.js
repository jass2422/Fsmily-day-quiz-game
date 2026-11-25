// [correct brand id, level, clue, [3 wrong brand ids]]
// Add or edit questions freely. Every id must exist in brands.js.
export const QUESTIONS = [
  // ---------- EASY ----------
  ['tcs', 'easy', "India's largest IT services company, founded in 1968.", ['titan', 'taj', 'steel']],
  ['motors', 'easy', 'Makes the Nexon, Punch and Harrier.', ['steel', 'power', 'voltas']],
  ['taj', 'easy', 'Luxury hotel brand whose Mumbai flagship opened in 1903.', ['titan', 'westside', 'croma']],
  ['tanishq', 'easy', 'Jewellery brand from Titan Company.', ['fastrack', 'westside', 'taj']],
  ['airindia', 'easy', 'The airline that returned to the Tata Group in 2022.', ['taj', 'tataplay', 'voltas']],
  ['tatatea', 'easy', 'Tea brand behind the "Jaago Re" campaign.', ['salt', 'sampann', 'bigbasket']],
  ['voltas', 'easy', 'Tata brand best known for air conditioners.', ['titan', 'tataplay', 'westside']],
  ['steel', 'easy', 'Steel company with deep roots in Jamshedpur.', ['power', 'motors', 'tatacomm']],
  ['tataplay', 'easy', 'DTH television service formerly called Tata Sky.', ['tatacomm', 'croma', 'tataneu']],
  ['titan', 'easy', 'Watches and eyewear company founded in 1984.', ['voltas', 'westside', 'taj']],

  // ---------- MEDIUM ----------
  ['bigbasket', 'medium', 'Online grocery platform in which Tata Digital took a majority stake in 2021.', ['tatacliq', 'tata1mg', 'croma']],
  ['tataneu', 'medium', "The Tata Group's \"super app\", launched in 2022.", ['tatacliq', 'tata1mg', 'tatacapital']],
  ['croma', 'medium', 'Electronics retail chain.', ['westside', 'zudio', 'bigbasket']],
  ['zudio', 'medium', 'Value fashion retail brand from Trent, launched in 2016.', ['fastrack', 'croma', 'tatacliq']],
  ['westside', 'medium', "Trent's flagship fashion and home-living retail chain, started in 1998.", ['croma', 'tataplay', 'titan']],
  ['fastrack', 'medium', 'Youth-focused watches and accessories from Titan.', ['tanishq', 'zudio', 'voltas']],
  ['jlr', 'medium', 'Luxury car maker acquired from Ford in 2008.', ['elxsi', 'tatatech', 'tatacomm']],
  ['tetley', 'medium', 'British tea brand acquired by the Tata Group in 2000.', ['tatatea', 'salt', 'sampann']],
  ['salt', 'medium', 'Brand with the tagline "Desh ka namak".', ['sampann', 'tatatea', 'tetley']],
  ['sampann', 'medium', 'Brand of unpolished pulses and spices.', ['salt', 'tatatea', 'bigbasket']],
  ['tata1mg', 'medium', 'Online pharmacy and health platform under Tata Digital.', ['bigbasket', 'tatacliq', 'tataneu']],
  ['tataaia', 'medium', 'Life insurance joint venture with AIA.', ['tatacapital', 'tatacomm', 'tataneu']],
  ['starbucks', 'medium', 'Coffee-shop joint venture whose first Indian outlet opened in Mumbai in 2012.', ['tetley', 'bigbasket', 'croma']],
  ['tatacomm', 'medium', 'Global network and internet services provider, formerly VSNL.', ['tcs', 'elxsi', 'tatatech']],
  ['power', 'medium', 'Generates electricity and runs an EV charging network.', ['steel', 'motors', 'tataprojects']],

  // ---------- HARD ----------
  ['vistara', 'hard', 'Full-service airline, a joint venture with Singapore Airlines, merged into Air India in 2024.', ['taj', 'tataplay', 'tatacomm']],
  ['elxsi', 'hard', 'Design-led technology services for transportation, media and healthcare.', ['titan', 'tatacapital', 'tatacomm']],
  ['tataadvanced', 'hard', 'Aerospace and defence company assembling C-295 aircraft with Airbus in Vadodara.', ['tataprojects', 'tatatech', 'steel']],
  ['tataprojects', 'hard', 'Engineering and construction company building large infrastructure.', ['steel', 'power', 'tatatech']],
  ['tataelectronics', 'hard', 'Building a semiconductor fab in Dholera, Gujarat.', ['tatatech', 'elxsi', 'tatacomm']],
  ['tatasons', 'hard', 'Promoter and principal holding company of the Tata group.', ['tataneu', 'tatacapital', 'tcs']],
  ['tatacapital', 'hard', 'Financial services arm offering loans and wealth products.', ['tataaia', 'tataneu', 'tatasons']],
  ['tatacliq', 'hard', 'Online marketplace for fashion and electronics under Tata Digital.', ['bigbasket', 'tata1mg', 'zudio']],
];
