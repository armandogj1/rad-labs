import PropTypes from 'prop-types';
import { useRef, useLayoutEffect } from 'react';
import { v4 as uuid } from 'uuid';
import useOpen from '../hooks/useOpen';
import exists from '../utils/exists';
import '../styles/ExplorerItem.css';

function ExplorerItem({ el, type = 'Address', setViewed }) {
  const { isOpen, toggleOpen } = useOpen();

  useLayoutEffect(() => {
    setViewed.current(el);
  }, [isOpen]);

  if (exists(el.lora_euid)) {
    return (
      <p className='explorer-item' onClick={toggleOpen}>
        {el.lora_euid}
      </p>
    );
  }

  return (
    <div className='explorer-item' onClick={toggleOpen}>
      {(exists(el.name) || exists(el.number)) && (
        <p>
          {`${type}`}: {el.name || el.number}
        </p>
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
  setViewed: PropTypes.func,
};

export default ExplorerItem;
