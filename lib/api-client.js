import axios from "axios";

class ApiClient {
    constructor() {
        this.baseURL = process.env.NEXT_PUBLIC_API_URL ?? '/api';
        this.instance = axios.create({
            baseURL: this.baseURL,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    async postUser(userData) {
        try{
            const response = await this.instance.post('users', {data: userData});
            if (response.status == 200) {
                return response.data;
            }
        } catch(error) {
            return error
        }
    }    
    async getUserById(userId) {
        try{
            const { data } = await this.instance.get('users/'+userId);
            if (data) {
                return data;
            }
        } catch(error) {
            return error
        }
    }    
    async getAllUsers() {
        try{
            const { data } = await this.instance.get('users');
            if (data) {
                return data;
            }
        } catch(error) {
            return error
        }
    }    
    async deleteUserById(userId) {
        try{
            const { data } = await this.instance.delete('users?id='+userId);
            if (data) {
                return data;
            }
        } catch(error) {
            return error
        }
    }    
}

const apiInstance = new ApiClient;

export default apiInstance;