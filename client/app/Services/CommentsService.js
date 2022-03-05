import { ProxyState } from "../AppState.js"
import { Comment } from "../Models/Comment.js";
import { api } from "./AxiosService.js"

class CommentsService {
  async getAll() {
    const res = await api.get('api/comments')
    // console.log(res.data);
    ProxyState.comments = res.data.map(c => new Comment(c))
    console.log(ProxyState.comments);
    ProxyState.posts = ProxyState.posts
  }
  async addComment(rawComment) {
    const res = await api.post('api/comments', rawComment)
    console.log(res.data);
    let createdComment = new Comment(res.data)
    ProxyState.comments = [...ProxyState.comments, createdComment]
    ProxyState.posts = ProxyState.posts
  }
  async addUpVote(id) {
    let currentComment = ProxyState.comments.find(c => c.id == id)
    currentComment.upVotes++

    // console.log(currentComment);
    await api.put(`api/comments/${id}`, currentComment)
    ProxyState.posts = ProxyState.posts
  }
  async addDownVote(id) {
    let currentComment = ProxyState.comments.find(c => c.id == id)
    currentComment.downVotes++

    await api.put(`api/comments/${id}`, currentComment)
    //   console.log(currentComment);
    ProxyState.posts = ProxyState.posts
  }
  async deleteComment(id) {
    const res = await api.delete(`api/comments/${id}`)
    ProxyState.comments = ProxyState.comments.filter(c => c.id != id)
    ProxyState.posts = ProxyState.posts
  }
}

export const commentsService = new CommentsService()