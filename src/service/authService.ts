
const API_URL = "http://localhost:8080/api/auth/";

export const register = async(username: string, password: string) => {
    try{
        const response = await fetch(API_URL + 'register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
        return await response.json();
    }catch (error) {
        console.error('There was an error!', error);
      }
}

export const login = async (username: string, password: string) => {

    try{
        const response = await fetch(API_URL + 'login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })

        const data = await response.json();

        if(response.ok){
            localStorage.setItem('user', JSON.stringify(data));
            return data;
        }else{
            throw new Error(data.message || 'An error occurred during login');
        }
    }catch(error) {
        console.log("There was an error!", error);
        
    }
};