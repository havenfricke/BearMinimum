import { ProxyState } from "../AppState.js";
import { Post } from "../Models/Post.js";
import { api } from "./AxiosService.js"
import { commentsService } from "./CommentsService.js";

class PostsService {
    filterByOld() {
        const sortedActivities = ProxyState.posts.slice().sort((a, b) => Math.trunc(a.timestamps - b.timestamps))
        ProxyState.posts = ProxyState.posts
    }
    async upVotesPost(id) {
        ProxyState.posts.find(p => p.id == id)
        let addVote = ProxyState.posts
        const found = addVote.find(Post => id == Post.id)
        found.upVotesPost++
        const res = await api.put(`api/posts/${found.id}`, found)
        ProxyState.posts = ProxyState.posts
        console.log('PostService:UpvotePosts')

    }

    async filterByNew() {
        const sortedActivities = ProxyState.posts.slice().sort((a, b) => Math.trunc(b.timestamps - a.timestamps))
        ProxyState.posts = ProxyState.posts
    }
    async getPosts() {
        const res = await api.get('api/posts')

        console.log(res.data);
        ProxyState.posts = res.data.map(p => new Post(p))
        console.log(ProxyState.posts);

    }
    async createPost(rawPost) {
        const res = await api.post('api/posts', rawPost)
        console.log(res.data);
        const newPost = new Post(res.data)
        ProxyState.posts = [...ProxyState.posts, newPost]
    }

    async downVotesPost(id) {
        let downVote = ProxyState.posts
        const found = downVote.find(Post => id == Post.id)
        found.downVotesPost++
        const res = await api.put(`api/posts/${found.id}`, found)
        ProxyState.posts = ProxyState.posts
        console.log('PostService:DownVote')

    }
    async deletePost(id) {
        const res = await api.delete(`api/posts/${id}`)
        ProxyState.posts = ProxyState.posts.filter(p => p.id != id)
        ProxyState.posts = ProxyState.posts
        console.log('PostsService:Delete', res.data)
    }
}


export const postsService = new PostsService()
