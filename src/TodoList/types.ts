export interface TodoItemData {
  title: string
  body: string
}

export interface TodoListProps {
  todos: TodoItemData[]
}

export interface FormProps {
  addTodo: (title: string, body: string) => void
}

export type TodoFormData = {
  title: string
  body: string
}