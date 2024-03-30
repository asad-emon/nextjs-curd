import axios from "axios";

class ApiClient {
    constructor() {
        this.baseURL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/api';
        this.instance = axios.create({
            baseURL: this.baseURL,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    async postUser(userData) {
        try{
            const response = await this.instance.post('users', userData);
            if (response.status == 200) {
                return { message: response.data.message };
            }
        } catch(error) {
            return { error: error }
        }
    }    
    async getUserById(userId) {
        try{
            const { data } = await this.instance.get('users/'+userId);
            if (data) {
                return data;
            }
        } catch(error) {
            return { error: error }
        }
    }    
    async getAllUsers() {
        try{
            const { data } = await this.instance.get('users');
            if (data) {
                return data;
            }
        } catch(error) {
            return { error: error }
        }
    }    
}

export default new ApiClient;