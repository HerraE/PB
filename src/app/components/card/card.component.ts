import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() public title: string;
  @Input() public avatar: string;
  @Input() public icon: any;
  @Input() public progress: number;

  constructor() {}

  ngOnInit() {}
}
