import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>Covid App API Project</p>
        <ul>
          <li>
            <Link style={{color:'white'}} to="/">[Home]</Link>
          </li>
          <li>
          </li>
            <li>
          <Link style={{color:'white'}} to="/Info/">[!!!More Info!!!]</Link>
          </li>
          <li>
      </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
