import { ProxyState } from "../AppState.js";
import { Post } from "../Models/Post.js";
import { api } from "./AxiosService.js"
import { commentsService } from "./CommentsService.js";

class PostsService{
    async getPosts(){
        const res = await api.get('api/posts')

        console.log(res.data);
        ProxyState.posts = res.data.map(p => new Post(p))
        console.log(ProxyState.posts);
        
    }
    async createPost(rawPost){
        const res = await api.post('api/posts', rawPost)
        console.log(res.data);
        const newPost = new Post(res.data)
        ProxyState.posts = [...ProxyState.posts, newPost]
    }
}


export const postsService = new PostsService()