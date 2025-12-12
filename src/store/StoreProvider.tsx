import React, { ReactNode, useMemo, createContext, useContext } from 'react';
import RootStore from './rootStore';

interface StoreProviderProps {
  children: ReactNode;
}

export const RootStoreContext = createContext<RootStore | null>(null);

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const store = useMemo(() => new RootStore(), []);
  return <RootStoreContext.Provider value={store}>{children}</RootStoreContext.Provider>;
};

export const useStores = (): RootStore => {
  const store = useContext(RootStoreContext);
  if (!store) throw new Error('useStores must be used within a StoreProvider');
  return store;
};
