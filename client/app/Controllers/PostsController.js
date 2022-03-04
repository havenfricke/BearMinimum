import { postsService } from "../Services/PostsService.js";



export class PostsController{
    constructor(){
        this.getPosts()
        console.log('loaded the controller');
    }

    async getPosts(){
        try {
            await postsService.getPosts()
        } catch (error) {
            console.erorr(error);
        }
    }

}