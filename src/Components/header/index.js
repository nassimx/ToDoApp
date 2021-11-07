import './header.css';
import Web from './web';
function Header() {
  return (
    <div className="header">
      <div className="logo">sync.</div>
      <div className="web">
        <Web />
      </div>
    </div>
  );
}

export default Header;
