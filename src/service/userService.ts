const API_URL = "http://localhost:8080/api/users/user";

export const getUser = async (username: string) => {

    const authToken = localStorage.getItem("token");

    try {
      const response = await fetch(API_URL + "/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${authToken}`,
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
    }
  
      const data = await response.json();

      return data;
  
    } catch (error) {
  
      console.error("Error fetching user data:", error);
        throw error;
    }

}