import { createContext, useContext } from 'react';

const TimeContext = createContext(null);
TimeContext.displayName = 'retrieveTime';

function TimeProvider({ data, children }) {
  return <TimeContext.Provider value={data}>{children}</TimeContext.Provider>;
}

// useContext hook
function useRetrieveTime() {
  return useContext(TimeContext);
}

export { useRetrieveTime, TimeProvider };
