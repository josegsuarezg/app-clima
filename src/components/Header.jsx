import React from 'react';

const Header = ({titulo}) => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-1">
        <a href="#" className='brand-logo'>{titulo}</a>
      </div>

    </nav>
  );
};

export default Header;
