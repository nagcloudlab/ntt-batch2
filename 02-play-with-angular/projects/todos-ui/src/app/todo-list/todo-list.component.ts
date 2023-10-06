import { Component } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos: Array<Todo> = []

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todosService.todos$
      .subscribe((todos: Array<Todo>) => this.todos = todos);
    this.todosService.getTodos();
  }

}
