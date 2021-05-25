import PropTypes from 'prop-types';
import { useState } from 'react';
import Widget from './Widget';
import RadiatorNode from './RadiatorNode';

function Viewer({ el, viewerSetRef }) {
  const [item, setItem] = useState(el);
  viewerSetRef.current = setItem;
  // console.log(viewerSetRef);
  const { statuses, node_count, name, number, last_message, lora_euid } = item;

  return (
    <div className='viewer'>
      <Widget statuses={statuses} nodeCount={node_count} />

      <div>
        {!!lora_euid && <RadiatorNode {...item} />}
        <div>
          <p>{name}</p>
          <p>{number}</p>
          <p>{last_message}</p>
        </div>
      </div>
    </div>
  );
}

Viewer.propTypes = {
  el: PropTypes.object,
  type: PropTypes.string,
};

export default Viewer;
