import { ProxyState } from "../AppState.js"
import { commentsService } from "../Services/CommentsService.js"
// function _draw(){
//     let template = ''
//     ProxyState.comments.forEach(c => template += c.Template)
//     document.getElementById('posts').innerHTML = template
// }
export class CommentsController{
    constructor(){
        this.getAll()
        // ProxyState.on('comments', _draw)
    }

    async getAll(){
        await commentsService.getAll()
    }
}