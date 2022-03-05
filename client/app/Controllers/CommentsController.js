import { ProxyState } from "../AppState.js"
import { commentsService } from "../Services/CommentsService.js"
// function _draw(){
//     let template = ''
//     ProxyState.comments.forEach(c => template += c.Template)
//     document.getElementById('posts').innerHTML = template
// }
export class CommentsController {
    constructor() {
        this.getAll()
        // ProxyState.on('comments', _draw)
    }

    async getAll() {
        await commentsService.getAll()
    }

    async addComment(postId) {
        window.event.preventDefault()
        let form = window.event.target
        const rawComment = {
            postId,
            description: form.name.value,
        }
        await commentsService.addComment(rawComment)
        form.reset()
    }

    async deleteComment(id) {

        await commentsService.deleteComment(id)
    }
    async addUpVote(id) {
        await commentsService.addUpVote(id)
    }
    async addDownVote(id) {
        await commentsService.addDownVote(id)
    }
}



