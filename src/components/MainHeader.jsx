import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import '../styles/MainHeader.css';

function MainHeader({ data }) {
  return (
    <div className='main-header'>
      <ul>
        <li>
          <Dropdown data={data} />
        </li>
      </ul>
    </div>
  );
}

MainHeader.propTypes = {
  data: PropTypes.object,
};

export default MainHeader;
