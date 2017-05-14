import { Injectable } from '@angular/core';
interface ToDo {
    title: string;
    done: boolean;
};
@Injectable()
export class BullhornTodoCardService {
    todos: Array<ToDo> = [];
    constructor() {
        this.todos = [{
            title: 'Call Dave about upcoming interview',
            done: false
        }];
        this.save();
    }
    addTodo(todoTitle) {

    }
    save() {
      //save via app bridge
    }
}
