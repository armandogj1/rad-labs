import PropTypes from 'prop-types';
import useOpen from '../hooks/useOpen';
import '../styles/Dropdown.css';

function Dropdown({ label, children }) {
  const { isOpen, toggleOpen } = useOpen();

  return (
    <li className='dropdown'>
      <div className='button-wrapper'>
        <button id='dropdown-button' onClick={toggleOpen}>
          {label}
        </button>
        <div className={`arrow ${isOpen ? 'up' : 'down'}`}></div>
      </div>
      {isOpen && <aside className='dropdown-modal-wrapper'>{children}</aside>}
    </li>
  );
}
// function Dropdown({ data }) {
//   const { isOpen, toggleOpen } = useOpen();

//   const { retrieved_at, name, node_count, statuses } = data;

//   return (
//     <li className='dropdown'>
//       <div className='button-wrapper'>
//         <button id='dropdown-button' onClick={toggleOpen}>
//           Info
//         </button>
//         <div className={`arrow ${isOpen ? 'up' : 'down'}`}></div>
//       </div>
//       {isOpen && (
//         <aside className='dropdown-modal'>
//           <p>{name}</p>
//           <p>Retrieval Time: {new Date(retrieved_at).toString()}</p>
//           <p>Retrieval Time: {formatTime(retrieved_at)}</p>
//           <p>Total Node Count: {node_count}</p>
//           <p>Statuses: {statuses.join(', ')}</p>
//         </aside>
//       )}
//     </li>
//   );
// }

Dropdown.propTypes = {
  data: PropTypes.object,
};

export default Dropdown;
