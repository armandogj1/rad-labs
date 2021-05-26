import PropTypes from 'prop-types';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Widget from './Widget';
import RadiatorNode from './RadiatorNode';
import exists from '../utils/exists';
import '../styles/Viewer.css';

function Viewer({ el, viewerSetRef }) {
  const [item, setItem] = useState(el);
  viewerSetRef.current = setItem;
  // console.log(viewerSetRef);
  const { statuses, node_count, lora_euid, type, nodes } = item;

  return (
    <div className='viewer'>
      <Widget statuses={statuses} nodeCount={node_count} />

      {(exists(lora_euid) || exists(nodes)) && (
        <div className='radiator-nodes'>
          {!!lora_euid && <RadiatorNode {...item} />}
          {type === 'Radiator' && nodes.map((n) => <RadiatorNode key={uuid()} {...n} />)}
        </div>
      )}
    </div>
  );
}

Viewer.propTypes = {
  el: PropTypes.object,
  type: PropTypes.string,
};

export default Viewer;
