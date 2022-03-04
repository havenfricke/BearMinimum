import { ProxyState } from "../AppState.js";
import { Post } from "../Models/Post.js";
import { api } from "./AxiosService.js"

class PostsService{
    async getPosts(){
        const res = await api.get('api/posts')

        console.log(res.data);
        ProxyState.posts = res.data.map(p => new Post(p))
        console.log(ProxyState.posts);
    }
}


export const postsService = new PostsService()