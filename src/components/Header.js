import React from 'react';
import { blue } from 'ansi-colors';

const Header = ({ titulo }) => {
  return ( 
    <nav className="nav-wrapper light-blue darkend-3">
      <a href="" className="brand-logo center">{titulo}</a>
    </nav>
  );
}
 
export default Header;