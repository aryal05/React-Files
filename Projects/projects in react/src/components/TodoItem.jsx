function TodoItem({todoDate, todoName}){

     return(
          <div class="container ">
          <div class="row new-row">
            <div class="col-6">
             {todoName}
            </div>
            <div class="col-4">
             {todoDate}
            </div>
            <div class="col-2">
            <button type="button" class="btn btn-danger new-button">Delete</button>
            </div>
          </div>
          </div>

     )

}
export default TodoItem;