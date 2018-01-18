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
  selectedType = 'all';

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
    this.todos.forEach(item => {
      item.done = this.isChecked;
    });
  }

  checkItem() {
    if (this.isCheckAll) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  }

  selectType(type: string) {
    this.selectedType = type;
  }
}
