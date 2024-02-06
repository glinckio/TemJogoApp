import React, {createContext, useContext, useState} from 'react';

interface RootContextType {
  root: unknown;
  dispatch: React.Dispatch<React.SetStateAction<unknown>>;
}

interface RootProviderType {
  children: React.JSX.Element;
}

export const RootContext = createContext<RootContextType | unknown>(null);

export const RootProvider = ({children}: RootProviderType) => {
  const [root, dispatch] = useState(null);

  return (
    <RootContext.Provider value={{root, dispatch}}>
      {children}
    </RootContext.Provider>
  );
};

export const useRootState = () => {
  return useContext(RootContext);
};
