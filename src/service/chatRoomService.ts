const API_URL = "http://localhost:8080/api/chatroom/";

export const createChatRoom = async (chatRoomName: string, userId: string) => {

  const authToken = localStorage.getItem("token");

  try {
    const response = await fetch(API_URL + "create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        name: chatRoomName,
        userId: userId,
      }),
    });


    if (response.status === 409) {

      const errorData = await response.json();

      throw errorData;

    } else if (!response.ok) {

      const errorData = await response.json();

      throw new Error(errorData.message || "An error occurred");
    }

    const data = await response.json();
    return data;

  } catch (error) {

    throw error
  }
};

export const getChatRoomsByUserId = async (userId: number) => {

    const authToken = localStorage.getItem("token");

    try {
      const response = await fetch(API_URL + "get-all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          userId: userId,
        }),
      });
  
      const data = await response.json();

      return data;
  
    } catch (error) {
  
      throw error
    }

}
