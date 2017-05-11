import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-api-card',
  templateUrl: './api-card.component.html',
  styleUrls: ['./api-card.component.scss']
})
export class ApiCardComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() imgUrl: string;
  @Input() content: string;
  @Input() apiText: string;
  @Input() responseObj: any;
  expand = false;


  @Output() apiClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.expand = true;
    this.apiClick.next(this.apiText);
  }

  responsePanelClass() {
    if (!this.responseObj) {
      return '';
    }
    let rClass = ['response'];
    if (this.expand) {
      rClass.push('expand');
    }
    this.responseObj.status === 200 ?
      rClass.push('response-success') :
      rClass.push('response-error');
    return rClass.join(' ');
  }

}
