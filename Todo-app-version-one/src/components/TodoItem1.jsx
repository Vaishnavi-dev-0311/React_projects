function TodoItem1() {
  let todoName = "Like the youtube page";
  let todoDate = "28/07/2024";

  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">{todoName}</div>

        <div class="col-4">{todoDate}</div>

        <div class="col-2">
          <button type="button" class="btn btn-outline-danger todo-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
