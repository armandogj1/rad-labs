import PropTypes from 'prop-types';
import SpaceList from './SpaceList';
import useOpen from '../hooks/useOpen';
import Header from './Header';
import '../styles/Unit.css';

function Unit(props) {
  const { name, spaces } = props;
  const { isOpen, toggleOpen } = useOpen();

  return (
    <div className='unit' onClick={toggleOpen}>
      <Header {...props} isOpen={isOpen} Heading={'h5'} label={'Unit'} />
      {isOpen && <SpaceList spaces={spaces} name={name} />}
    </div>
  );
}

Unit.propTypes = {
  name: PropTypes.string,
  spaces: PropTypes.array,
};

export default Unit;
