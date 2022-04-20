import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  @Input() public events: any[] = [];

  constructor() {}

  ngOnInit() {}

  public selectEvent(event: any): void {
    for (let ev of this.events) {
      ev.active = false;
    }
    event.active = true;
  }
}
