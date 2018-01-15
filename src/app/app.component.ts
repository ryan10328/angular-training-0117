import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword: string;
  todos: Array<any> = [];
  addItem() {
    if (this.keyword) {
      this.todos = [...this.todos, { todo: this.keyword, done: false }];
    }
    this.keyword = '';
  }
}
