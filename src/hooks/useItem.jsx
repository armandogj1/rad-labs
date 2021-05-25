import { createContext, useContext, useState, useEffect, useRef } from 'react';

const ItemContext = createContext(null);
ItemContext.displayName = 'ItemContext';

function ItemProvider({ initialItem = {}, children }) {
  const [item, setItem] = useState();
  const setFileRef = useRef(setItem);

  return (
    <ItemContext.Provider value={{ item, setItem, setFileRef }}>
      {children}
    </ItemContext.Provider>
  );
}

// useContext hook
function useItemContext(callback) {
  const { item, setItem, setFileRef } = useContext(ItemContext);

  useEffect(() => {
    setFileRef.current = setItem;
  }, [item]);

  return { item, setItem, setFileRef };
}

export { useItemContext, ItemProvider };
