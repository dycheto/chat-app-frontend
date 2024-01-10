import { Dispatch, ReactNode, SetStateAction } from "react";

export type UserType = {
    id: string;
    username: string;
    jwt: string;
}

export type MessageType = {
    id: string;
    senderId: string;
    receiverId: string;
    content: string;
}

export type ChatRoomType = {
    id: string;
    name: string;
    users: UserType[];
    messages: MessageType[];
}

export type AppStateType ={
    currentUser: UserType | null;
    chatRooms: ChatRoomType[];
}

export type AppContextType = {
    state: AppStateType;
    setState: Dispatch<SetStateAction<AppStateType>>;
}

export type AppProviderProps = {
    children: ReactNode; 
  };