import { useState } from 'react';

function useOpen() {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = (e) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  return { isOpen, toggleOpen };
}

export default useOpen;
