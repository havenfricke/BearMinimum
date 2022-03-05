import { ProxyState } from "../AppState.js";
import { Post } from "../Models/Post.js";
import { api } from "./AxiosService.js"

class PostsService {
    async getPosts() {
        const res = await api.get('api/posts')

        console.log(res.data);
        ProxyState.posts = res.data.map(p => new Post(p))
        console.log(ProxyState.posts);
    }

    async upVote(id) {
        let addVote = ProxyState.posts
        const found = addVote.find(Post => id == Post.id)
        found.upVotes++
        const res = await api.put(`api/posts/${found.id}`, found)
        ProxyState.posts = ProxyState.posts

    }
}


export const postsService = new PostsService()
