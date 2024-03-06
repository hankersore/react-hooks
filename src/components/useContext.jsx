import { createContext, useContext } from 'react';

const MoodContext = createContext();

const UserContext = createContext();

export const MoodProvider = ({ children }) => {
  const mood = {
    happy: '😀',
    sad: '😕',
    stressed: '🥲',
  };

  return (
    <MoodContext.Provider value={mood}>
      {children}
    </MoodContext.Provider>
  );
};


export const UserProvider = ({ children }) => {
  const user = {
    name: 'Dilshoda',
    email: 'di@example.com',
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export const useMood = () => useContext(MoodContext);

export const useUser = () => useContext(UserContext);