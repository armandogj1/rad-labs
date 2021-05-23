import PropTypes from 'prop-types';
import Widget from './Widget';

function Header({ statuses, node_count, Heading, name, isOpen }) {
  return (
    <header className='heading'>
      <Heading>{name}</Heading>
      {!isOpen && <Widget statuses={statuses} nodeCount={node_count} />}
    </header>
  );
}

Header.propTypes = {
  statuses: PropTypes.array,
  nodeCount: PropTypes.number,
  name: PropTypes.string,
  Heading: PropTypes.string,
  isOpen: PropTypes.bool,
};

export default Header;
