import { ProxyState } from "../AppState.js"

export class Post {
  constructor(data) {
    this.id = data.id
    this.author = data.creator.name
    this.title = data.title
    this.description = data.description
    this.imgUrl = data.imgUrl
    this.upVotes = data.upVotes
    this.downVotes = data.downVotes
  }
  get Template() {
    return `
        <div class="col-4">
        <div class="rounded shadow bg-white">
          <div class="rounded-top text-center p-2">
            <h4 class="d-flex justify-content-between">
              <i class="mdi mdi-delete selectable" title="delete post" onclick=""></i>
            </h4>
          </div>

          <div class="p-3">
            <img class="col-12 p-3" src="${this.imgUrl}" alt="">
            <div class="row">
              <div class="col-12 d-flex justify-content-around">
                <i class="mdi mdi-arrow-up-bold-box-outline fs-1 text-green" type="button" onclick="app.postsController.upVote()">${this.upVotes}</i>
                <i class="mdi mdi-arrow-down-bold-box-outline fs-1 text-red" type="button" onclick="app.postsController.downVote()">${this.downVotes}</i>
                
              
              </div>

              <div class="col-12 bg-secondary">
                <h1>${this.title}</h1>
                <h6>${this.description}</h6>
              </div>
            </div>

            <div>
           
      <div>
      <div class="comment-section">
          ${this.CommentsTemplate}
          </div>
          </div>
      </div>

      <form id="commentform" class="p-3" onsubmit="app.commentsController.addComment('${this.id}')">
      <div class="input-group">
      <textarea minlength="3" maxlength="100" class="form-control" id="exampleFormControlTextarea1" rows="3">     </textarea>
          </div>
 
      </div>
    </form>
 
      </div>
      </div>
        `
  }
  get CommentsTemplate() {
    let template = ''
    const postComments = ProxyState.comments.filter(c => c.postId == this.id)
    postComments.forEach(c => template += c.Template)
    console.log(postComments);
    return template
  }
}