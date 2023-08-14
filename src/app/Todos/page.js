
async function Todos() {
  async function fetchTodos() {
    let res = await fetch("https://dummyjson.com/todos");
    const todosData =  await res.json();
    return todosData
  }

  const {todos} = await fetchTodos();

  async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  await wait(3000); // simulate a delay by calling wait to delay for some seconds before returning todos

  return (
    <> 
      <div className="todo-container">
        <div className="todo-list">
          {todos.slice(0, 10).map((todo) => (
            <ul key={todo.id}>
              <div className="todos">
                <li> <h2>{todo.todo}</h2> </li>
              </div>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default Todos;
