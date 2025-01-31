function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row todo-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>

        <div class="col-4">
          <input type="date" />
        </div>

        <div class="col-2">
          <button type="button" class="btn btn-outline-success todo-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
