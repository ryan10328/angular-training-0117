import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isChecked = false;
  keyword: string;
  todos: Array<any> = [];

  get unCompleteCount() {
    return this.todos.filter(todo => !todo.done).length;
  }

  get isCheckAll() {
    return (
      this.todos.filter(item => item.done).length + 1 === this.todos.length
    );
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

  checkAll() {
    if (this.isChecked) {
      this.todos.forEach(item => {
        if (!item.done) {
          item.done = !item.done;
        }
      });
    } else {
      this.todos.forEach(item => {
        item.done = !item.done;
      });
    }
  }

  checkItem() {
    if (this.isCheckAll) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  }
}
