import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  newTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'First todo',
        completed: false,
      },
      {
        id: 2,
        title: 'Second todo',
        completed: false,
      },
    ];
  }

  toggleDone(id: number) {
    this.todos.map((todo) => {
      if (todo.id == id) todo.completed = !todo.completed;
      return todo;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  addTodo() {
    this.todos.push({
      id: this.todos.length + 1,
      title: this.newTodo,
      completed: false,
    });
    this.newTodo = '';
  }
}
