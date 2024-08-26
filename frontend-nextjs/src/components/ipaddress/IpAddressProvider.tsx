import React, { createContext, useContext, useState, useCallback } from 'react';
import axios from 'axios';
import { BASE_URL } from '@/config/app.config';

export interface SystemLogs {
  id?: number;
  new_value: string | null;
  old_value: string | null;
}

export interface IpAddressProps {
  id?: number;
  value: string;
  label: string;
  system_logs?: SystemLogs[];
}

type ActionType = 'VIEW_LOG' | 'UPDATE' | undefined;

interface IpAddressContextProps {
  items: IpAddressProps[];
  addRecord: (newRecord: IpAddressProps) => void;
  updateRecord: (updatedRecord: IpAddressProps) => void;
  refreshItems: () => Promise<void>;
  selectedIpAddress?: IpAddressProps;
  setSelectedIpAddress: (ipAddress: IpAddressProps | undefined) => void;
  action?: ActionType,
  setAction?: (_action: ActionType) => void;
}

const IpAddressContext = createContext<IpAddressContextProps | undefined>(undefined);

export const IpAddressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<IpAddressProps[]>([]);
  const [selectedIpAddress, setSelectedIpAddress] = useState<IpAddressProps | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [action, setAction] = useState<ActionType | undefined>(undefined);

  const fetchIpAddress = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(BASE_URL + '/api/ip-address');
      setItems(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  const addRecord = (newRecord: IpAddressProps) => {
    setItems((prevItems) => [...prevItems, newRecord]);
  };

  const updateRecord = (updatedRecord: IpAddressProps) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === updatedRecord.id ? updatedRecord : item))
    );
  };

  const refreshItems = fetchIpAddress;

  return (
    <IpAddressContext.Provider
      value={{
        items,
        addRecord,
        updateRecord,
        refreshItems,
        selectedIpAddress,
        setSelectedIpAddress,
        action,
        setAction
      }}
    >
      {children}
    </IpAddressContext.Provider>
  );
};

export const useIpAddressContext = () => {
  const context = useContext(IpAddressContext);
  if (!context) {
    throw new Error('useIpAddressContext must be used within an IpAddressProvider');
  }
  return context;
};
