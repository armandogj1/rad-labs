import PropTypes from 'prop-types';
import FloorList from './FloorList';
import useOpen from '../hooks/useOpen';
import Header from './Header';

function Building({ data }) {
  const { isOpen, toggleOpen } = useOpen();

  return (
    <section className='building' onClick={toggleOpen}>
      <Header {...data} isOpen={isOpen} Heading={'h1'} label={'Building'} />
      {isOpen && <FloorList {...data} />}
    </section>
  );
}

Building.propTypes = {
  data: PropTypes.object,
};

export default Building;
