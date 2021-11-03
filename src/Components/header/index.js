import React, { useState } from 'react';
import './header.css';
import Mobile from './mobile';
import Web from './web';
function Header() {
  const [mobile, setMobile] = useState(false);
  return (
    <div className="header">
      <div className="logo">sync.</div>
      <div className="web">
        <Web />
      </div>
      <div className="mobile">{mobile && <Mobile />}</div>
    </div>
  );
}

export default Header;
