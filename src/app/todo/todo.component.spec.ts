import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TodoComponent } from './todo.component'; // Standalone component
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Remove TodoComponent from declarations and add it to imports
      imports: [TodoComponent, FormsModule, CommonModule], // Import the standalone component
      providers: [TodoService]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a todo', () => {
    const todoService = TestBed.inject(TodoService);
    spyOn(todoService, 'addTodo').and.callThrough();

    component.newTodoTitle = 'Test Todo';
    component.addTodo();

    expect(todoService.addTodo).toHaveBeenCalledWith('Test Todo');
    expect(component.newTodoTitle).toBe('');
    expect(component.todos.length).toBe(1);
    expect(component.todos[0].title).toBe('Test Todo');
  });

  it('should delete a todo', () => {
    const todoService = TestBed.inject(TodoService);
    spyOn(todoService, 'deleteTodo').and.callThrough();

    const todo = { id: 1, title: 'Test Todo', completed: false };
    todoService.addTodo(todo.title);
    component.deleteTodo(todo.id);

    expect(todoService.deleteTodo).toHaveBeenCalledWith(todo.id);
    expect(component.todos.length).toBe(0);
  });

  it('should toggle todo completion', () => {
    const todoService = TestBed.inject(TodoService);
    spyOn(todoService, 'toggleTodoCompletion').and.callThrough();

    const todo = { id: 1, title: 'Test Todo', completed: false };
    todoService.addTodo(todo.title);
    component.toggleTodoCompletion(todo.id);

    expect(todoService.toggleTodoCompletion).toHaveBeenCalledWith(todo.id);
    expect(component.todos[0].completed).toBe(true);
  });
});
