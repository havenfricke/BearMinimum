import { ProxyState } from "../AppState.js";
import { Post } from "../Models/Post.js";
import { api } from "./AxiosService.js"
import { commentsService } from "./CommentsService.js";

class PostsService {
    async getPosts() {
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

    async upVote(id) {
        let addVote = ProxyState.posts
        const found = addVote.find(Post => id == Post.id)
        found.upVotes++
        const res = await api.put(`api/posts/${found.id}`, found)
        ProxyState.posts = ProxyState.posts
        console.log('PostService:Upvote')

    }
}


export const postsService = new PostsService()
