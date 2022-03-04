import { api } from "./AxiosService.js"

class PostsService{
    async getPosts(){
        const res = await api.get('api/posts')
        console.log(res.data);
    }
}


export const postsService = new PostsService()