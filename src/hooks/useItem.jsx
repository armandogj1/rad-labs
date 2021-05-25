import { createContext, useContext, useState } from 'react';

const ItemContext = createContext(null);
ItemContext.displayName = 'ItemContext';

function ItemProvider({ initialItem = {}, children }) {
  const [item, setItem] = useState();

  return (
    <ItemContext.Provider value={{ item, setItem }}>{children}</ItemContext.Provider>
  );
}

// useContext hook
function useItemContext(callback) {
  const { item, setItem } = useContext(ItemContext);

  return { item, setItem };
}

export { useItemContext, ItemProvider };
