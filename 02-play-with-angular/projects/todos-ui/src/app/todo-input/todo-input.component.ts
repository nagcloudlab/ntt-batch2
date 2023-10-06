import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodosService } from '../todos.service';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {

  todoForm!: FormGroup

  constructor(private fb: FormBuilder, private todosService: TodosService) { }

  ngOnInit() {
    this.todoForm = this.fb.group({
      title: ['', [Validators.required]]
    });
  }

  handleKeyup(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const formData = this.todoForm.value
      this.todosService.addTodo(formData)
      this.todoForm.reset()
    }

  }

}
