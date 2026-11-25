import Logo from './Logo.jsx';

export default function Header() {
  return (
    <header className="header">
      <Logo src="/logos/left-logo.png" alt="Left Logo" className="left" />
      <Logo src="/logos/tcs-logo.png" alt="TCS Logo" className="right" />
    </header>
  );
}
