import { ProxyState } from "../AppState.js"
import { Comment } from "../Models/Comment.js";
import { api } from "./AxiosService.js"

class CommentsService {
    async getAll(){
        const res = await api.get('api/comments')
        // console.log(res.data);
        ProxyState.comments = res.data.map(c => new Comment(c))
        console.log(ProxyState.comments);
    }
    async addComment(rawComment){
        const res = await api.post('api/comments', rawComment)
        console.log(res.data);
        let createdComment = new Comment(res.data)
        ProxyState.comments = [...ProxyState.comments, createdComment]
        ProxyState.posts = ProxyState.posts
    }
}

export const commentsService = new CommentsService()