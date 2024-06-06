import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService, Todo } from '../todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTodoTitle = '';
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle);
      this.updateTodos();
      this.newTodoTitle = '';
    }
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    this.updateTodos();
  }

  toggleTodoCompletion(id: number): void {
    this.todoService.toggleTodoCompletion(id);
    this.updateTodos();
  }

  private updateTodos(): void {
    this.todos = this.todoService.getTodos();
  }
}
