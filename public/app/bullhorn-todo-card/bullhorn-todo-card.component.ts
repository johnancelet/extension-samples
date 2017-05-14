// NG2
import { Component, OnInit } from '@angular/core';
// Vendor
import { TextBoxControl, FormUtils } from 'novo-elements';
import { BullhornTodoCardService } from './bullhorn-todo-card.service';

@Component({
  selector: 'bullhorn-todo-card',
  templateUrl: './bullhorn-todo-card.component.html',
  styleUrls: ['./bullhorn-todo-card.component.scss']
})
export class BullhornTodoCardComponent implements OnInit {
  checklist: Array<any> = [];
  todoControl: TextBoxControl;
  newTodo: String = '';
  todoForm: any;
  layoutOptions: { iconStyle: string };

  constructor(private service: BullhornTodoCardService, private formUtils: FormUtils) { }

  ngOnInit() {

  }

}
