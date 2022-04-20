import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent implements OnInit {
  public cvEvents: any[] = [
    {
      active: true,
      date: '07/2011',
      title: 'Mittlerer Bildungsabschluss',
    },
    {
      date: '06/2013',
      title: 'Fachhochschulreife',
    },
    {
      date: '03/2017',
      title: 'Bachelor of Science (B. Sc.)',
    },
  ];

  constructor() {}

  ngOnInit() {}

  public selectCvEvent(event: any): void {
    for (let ev of this.cvEvents) {
      ev.active = false;
    }
    event.active = true;
  }
}
