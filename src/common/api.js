import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

class Api{
    constructor(){
        this.config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }

    // @desc Create a new post
    async createPost(){
        try {
            const response = await axios.post(`/api/posts`)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    // @desc Retrieve all posts
    async getAllPosts(){
        try {
            const response = await axios.get(`/api/posts`)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    // @desc Retrieve single user posts
    async getUserPosts({userId}){
        try {
            const response = await axios.get(`/api/posts/${userId}/posts`)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    // @desc Likes a single post
    async likePost({postId}){
        try{
            const response = await axios.patch(`/api/posts/${postId}/like`)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    // @desc Deletes a single post
    async deletePost({postId}){
        try{
            const response = await axios.delete(`/api/posts/${postId}`)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    // @desc Updates a single post
    async updatePost({postId}){
        try {
            const response = await axios.patch(`/api/posts/${postId}`)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    // @desc Get a single user profile
    async getUserProfile({userId}){
        try{
            const response = await axios.get(`/api/users/${userId}`)
            return response.data
        } catch (error){
            console.log(error.message)
        }
    }

    // @desc Get a single user friends list
    async getFriends({userId}){
        try {
            const response = await axios.get(`/api/users/${userId}/friends`)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    // @desc Get a single user friend request list
    async getFriendRequest({userId}){
        try {
            const response = await axios.get(`/api/users/${userId}/requests`)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    // @desc Add a friend
    async addRemoveFriendRequest({userId, friendId}){
        try {
            const response = await axios.patch(`/api/users/${userId}/add/${friendId}`)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    // @desc Unfriend a user
    async unfriend({userId, friendId}){
        try {
            const response = await axios.patch(`/api/users/${userId}/unfriend/${friendId}`)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    // @desc Confirm a friend request
    async confirm({userId, friendId}){
        try {
            const response = await axios.patch(`/api/users/${userId}/confirm/${friendId}`)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    // @desc Register a new user
    async register({body}){
        try {
            const response = await axios.post(`/api/auth/register`, {...body})
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    // @desc Login a user
    async login({body}){
        try {
            const response = await axios.post(`/api/auth`, {...body})
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    // @desc Get the info of current logged user
    async getMe(){
        try {
            const response = await axios.get(`/api/auth/me`)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

}

export default new Api()
