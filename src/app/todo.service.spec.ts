import { TestBed } from '@angular/core/testing';
import { TodoComponent } from './todo/todo.component';  // Import the TodoComponent (adjust the path as necessary)
import { TodoService } from './todo.service';      // Import the TodoService (adjust the path as necessary)

describe('TodoComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TodoComponent],  // Import the standalone component
      providers: [TodoService]   // Provide the TodoService
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(TodoComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
