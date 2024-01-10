import { createContext, useState } from "react";
import { AppStateType, AppContextType, ContextProviderProps } from "../types";

const initialState: AppStateType = {
    currentUser: null,
    chatRooms: []
}

export const AppContext = createContext<AppContextType | null>(null); 



export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [state, setState] = useState<AppStateType>({
      currentUser: null,
      chatRooms: []
    });
  
    return (
      <AppContext.Provider value={{ state, setState }}>
        {children}
      </AppContext.Provider>
    );
  }