import { Component, OnInit } from '@angular/core';

//Service
import { TodoListService } from './todo-list.service';

//Class
import { Todo } from './todo.model';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor( private todoListService : TodoListService) { }

  ngOnInit(): void {
  }

  addTodo(inputRef:string):void {
    const todo = inputRef.trim();
    if(todo){
      this.todoListService.add(todo);
      inputRef ='';
    }
  }

  getList():Todo[]{
    return this.todoListService.getList();
  }

  remove(index:number):void{
    this.todoListService.remove(index);
  }

}
