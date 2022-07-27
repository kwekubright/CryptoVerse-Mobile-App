import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const NavBar = (props) => {
  const { page } = props;

  return (
    <Navbar id="navbar" variant="dark" className="cv-nav" fixed="top">
      <Container>
        {/* add back arrow */}

        <Navbar.Brand href="#home" className="fw-bold">
          {page !== 'Home' ? (
            <FontAwesomeIcon
              icon={solid('chevron-left')}
              className="me-2"
              onClick={() => {
                window.history.back();
              }}
            />
          ) : (
            ''
          )}
          {page === 'Home' ? 'CryptoVerse' : page}
        </Navbar.Brand>
        <Navbar.Brand>
          <FontAwesomeIcon icon={solid('microphone')} className="me-2" />
          <FontAwesomeIcon icon={solid('gear')} className="" />
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
