interface Todo {
    name: string,
    state: ToDoState
}
enum ToDoState {
    New = 1,
    Completed = 3
}
var todo = <Todo>{
    name: 'sasha'
}
