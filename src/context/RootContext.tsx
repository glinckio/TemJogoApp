import React, {createContext, useContext, useState} from 'react';

export enum ThemeEnum {
  DARK = 'dark',
  LIGHT = 'light',
}

interface RootContextType {
  theme: ThemeEnum;
  themeDispatch?: React.Dispatch<React.SetStateAction<ThemeEnum>>;
}

interface RootProviderType {
  children: React.JSX.Element;
}

export const RootContext = createContext<RootContextType>({
  theme: ThemeEnum.DARK,
});

export const RootProvider = ({children}: RootProviderType) => {
  const [theme, themeDispatch] = useState<ThemeEnum>(ThemeEnum.DARK);

  return (
    <RootContext.Provider value={{theme, themeDispatch}}>
      {children}
    </RootContext.Provider>
  );
};

export const useRootState = (): RootContextType => {
  return useContext(RootContext);
};
