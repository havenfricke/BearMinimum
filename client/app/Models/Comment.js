
export class Comment{
    constructor(data){
        this.id = data.id
        this.user = data.creator.name
        this.postId = data.postId
        this.description = data.description
        this.upVotes = data.upVotes
        this.downVotes = data.downVotes

    }
    get Template(){
        return `
        
        <div class="bg-secondary lighten-30 mt-4 p-2 rounded">
          <p><b>${this.user}</b> <i class="mdi mdi-delete selectable" title="delete comment" onclick="app.commentsController.deleteComment('${this.id}')"></i></p>
          <p>${this.description}</p>
          <div class="text-end">
          <i class="mdi mdi-arrow-up-bold-box-outline fs-1 text-green" type="button" onclick="app.commentsController.addUpVote('${this.id}')">${this.upVotes}</i>
                <i class="mdi mdi-arrow-down-bold-box-outline fs-1 text-red" type="button" onclick="app.commentsController.addDownVote('${this.id}')">${this.downVotes}</i>
          </div>
          </div>
         
        
        `
    }
}

/* <div style="height:33vh; overflow:auto;">
<div class="bg-secondary lighten-30 mt-4 p-2 rounded">
  <p><b>User</b></p>
  <p>User comment</p>
  <div class="text-end">
  </div>
</div> */
