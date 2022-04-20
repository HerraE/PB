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
      date: '07/2004',
      title: 'Grundschulabschluss',
    },
    {
      date: '07/2011',
      title: 'Mittlerer Bildungsabschluss',
    },
    {
      date: '06/2013',
      title: 'Fachhochschulreife',
    },
    {
      date: '03/2016',
      title: 'IBO',
    },
    {
      date: '03/2017',
      title: 'Bachelor of Science (B. Sc.)',
    },
    {
      date: '04/2017',
      title: 'HTW/Odion',
    },
    {
      date: '02/2018',
      title: 'fitt',
    },
    {
      date: '09/2019',
      title: 'Globus',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
