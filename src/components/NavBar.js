import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { PropTypes } from 'prop-types';

const NavBar = (props) => {
  const { page } = props;

  return (
    <Navbar variant="dark" className="cv-nav" fixed="top">
      <Container>
        {/* add back arrow */}

        <Navbar.Brand href="#home" className="fw-bold">
          {page !== 'Home' ? (
            <span className="nav-back">
              <i className="fas fa-chevron-left" />
            </span>
          ) : null}
          { page === 'Home' ? 'CryptoVerse' : page }
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

NavBar.defaultProps = {
  page: 'home',
};

NavBar.propTypes = {
  page: PropTypes.string,
};

export default NavBar;
