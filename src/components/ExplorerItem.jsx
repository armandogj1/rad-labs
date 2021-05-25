import PropTypes from 'prop-types';
import { useLayoutEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Status from './Status';
import useOpen from '../hooks/useOpen';
import { useRetrieveTime } from '../hooks/useRetrieveTime';
import exists from '../utils/exists';
import getTimeClass from '../utils/getTimeClass.js';
import '../styles/ExplorerItem.css';

function ExplorerItem({ el, type = 'Address', setViewed }) {
  const { isOpen, toggleOpen } = useOpen();
  const { retrieved_at } = useRetrieveTime();

  useLayoutEffect(() => {
    setViewed.current(el);
  }, [isOpen]);

  if (exists(el.lora_euid)) {
    return (
      <div className='explorer-line' onClick={toggleOpen}>
        <p className={getTimeClass(el.last_message, retrieved_at)}>
          {`${type}`}: {el.lora_euid}
        </p>
        <Status status={el.status} />
      </div>
    );
  }

  return (
    <div className='explorer-item' onClick={toggleOpen}>
      {(exists(el.name) || exists(el.number)) && (
        <div className='explorer-line'>
          <p>
            {`${type}`}: {el.name || el.number}
          </p>
          <div className={`arrow ${isOpen ? 'up' : 'down'}`}></div>
          {!isOpen && <Status statuses={el.statuses} />}
        </div>
      )}
      {isOpen && (
        <div className='explorer-item-children'>
          {exists(el.floors) &&
            el.floors.map((item) => (
              <ExplorerItem key={uuid()} el={item} type={'Level'} setViewed={setViewed} />
            ))}
          {exists(el.nodes) &&
            el.nodes.map((item) => (
              <ExplorerItem key={uuid()} el={item} type={'Node'} setViewed={setViewed} />
            ))}
          {exists(el.radiators) &&
            el.radiators.map((item) => (
              <ExplorerItem
                key={uuid()}
                el={item}
                type={'Radiator'}
                setViewed={setViewed}
              />
            ))}
          {exists(el.spaces) &&
            el.spaces.map((item) => (
              <ExplorerItem key={uuid()} el={item} type={'Space'} setViewed={setViewed} />
            ))}
          {exists(el.units) &&
            el.units.map((item) => (
              <ExplorerItem key={uuid()} el={item} type={'Unit'} setViewed={setViewed} />
            ))}
        </div>
      )}
    </div>
  );
}

ExplorerItem.propTypes = {
  el: PropTypes.object,
  type: PropTypes.string,
  setViewed: PropTypes.object,
};

export default ExplorerItem;
