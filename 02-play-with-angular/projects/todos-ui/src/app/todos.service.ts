import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './model/todo';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos: Array<Todo> = []
  todos$ = new BehaviorSubject<Array<Todo>>(this.todos);

  constructor(private httpClient: HttpClient) { }

  getTodos() {
    this.httpClient.get<Todo[]>('http://localhost:3000/api/v1/todos')
      .subscribe((todos: Array<Todo>) => {
        this.todos = todos
        this.todos$.next(this.todos)
      });
  }
  addTodo(formData: any) {
    this.httpClient.post<Todo>('http://localhost:3000/api/v1/todos', formData)
      .subscribe((todo: Todo) => {
        this.todos.push(todo)
        this.todos$.next(this.todos)
      });
  }


}
