import PropTypes from 'prop-types';
import { useState } from 'react';

function Viewer({ el, viewerSetRef }) {
  const [item, setItem] = useState(el);
  viewerSetRef.current = setItem;
  console.log(viewerSetRef);

  return <div className='explorer-item'>{JSON.stringify(item)}</div>;
}

Viewer.propTypes = {
  el: PropTypes.object,
  type: PropTypes.string,
};

export default Viewer;
