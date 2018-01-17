import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isChecked = false;
  todos: Array<any> = [];
  keyword: string;
  selectedType = 'all';
  outerTitle = 'hello world';
  get unCompletedCount() {
    return this.todos.filter(item => !item.done).length;
  }

  addTodo() {
    if (this.keyword) {
      this.todos = [...this.todos, { todo: this.keyword, done: false }];
    }
    this.keyword = '';
  }

  removeTodo(item) {
    this.todos = this.todos.filter(todo => item !== todo);
  }

  clearCompleted() {
    this.todos = this.todos.filter(item => !item.done);
  }

  toggleAll() {
    this.todos.forEach(todo => {
      if (this.isChecked) {
        if (!todo.done) {
          todo.done = true;
        }
      } else {
        if (todo.done) {
          todo.done = false;
        }
      }
    });
  }

  selectType(type) {
    this.selectedType = type;
  }
}
