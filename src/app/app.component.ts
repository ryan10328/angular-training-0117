import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword: string;
  todos: Array<any> = [];

  get unCompleteCount() {
    return this.todos.filter(todo => !todo.done).length;
  }

  addItem() {
    if (this.keyword) {
      this.todos = [...this.todos, { todo: this.keyword, done: false }];
    }
    this.keyword = '';
  }

  removeItem(item: any) {
    this.todos = this.todos.filter(todo => item !== todo);
  }

  clearCompleted() {
    this.todos = this.todos.filter(todo => !todo.done);
  }
}
