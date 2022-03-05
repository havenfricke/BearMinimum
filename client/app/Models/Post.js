import { ProxyState } from "../AppState.js"

export class Post {
  constructor(data) {
    this.id = data.id
    this.author = data.creator.name
    this.title = data.title
    this.description = data.description
    this.imgUrl = data.imgUrl
    this.upVotesPost = data.upVotesPost
    this.downVotesPost = data.downVotesPost
  }
  get Template() {
    return `
        <div class="col-md-5">
        <div class="rounded shadow">
          <div class="rounded-top post-styling text-center p-2">
            <h4 class="d-flex justify-content-between">
              <i class="mdi mdi-delete selectable" title="delete post" onclick="app.postsController.deletePost('${this.id}')"></i>
            </h4>
          </div>

          <div class="p-3 post-styling">
            <img class="col-12 p-3" src="${this.imgUrl}" alt="">
            <div class="row">
              <div class="col-12 d-flex justify-content-around">
                <i class="mdi mdi-arrow-up-bold-box-outline fs-1 text-green" type="button" onclick="app.postsController.upVotesPost('${this.id}')">${this.upVotesPost}</i>
                <i class="mdi mdi-arrow-down-bold-box-outline fs-1 text-red" type="button" onclick="app.postsController.downVotesPost('${this.id}')">${this.downVotesPost}</i>
                
              
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



      <form class="row p-2" onsubmit="app.commentsController.addComment('${this.id}')">
      <div class="mb-3 col-6">
        <label for="" class="form-label">Comments:</label>
        <input required type="text" class="form-control" name="description" id="description"
          aria-describedby="helpId" placeholder="" rows="3">
      </div>

    </form>


      </div>

 
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