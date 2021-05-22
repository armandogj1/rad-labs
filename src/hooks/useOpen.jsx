import { useState } from 'react';

const useOpen = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return { isOpen, toggleOpen };
};

export default useOpen;
