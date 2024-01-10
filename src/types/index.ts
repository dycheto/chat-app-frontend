export type UserType = {
    id: string,
    username: string
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

