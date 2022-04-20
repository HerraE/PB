import { Component, OnInit } from '@angular/core';

import { faAngular } from '@fortawesome/free-brands-svg-icons/faAngular';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons/faCss3Alt';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5';
import { faJava } from '@fortawesome/free-brands-svg-icons/faJava';
import { faJs } from '@fortawesome/free-brands-svg-icons/faJs';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons/faNodeJs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  public skillGroups: any[] = [
    {
      title: 'Development',
      skills: [
        {
          title: 'Javascript',
          icon: faJs,
          progress: 100,
        },
        {
          title: 'HTML',
          icon: faHtml5,
          progress: 100,
        },
        {
          title: 'CSS',
          icon: faCss3Alt,
          progress: 90,
        },
        {
          title: 'Java',
          icon: faJava,
          progress: 90,
        },
      ],
    },
    {
      title: 'Frameworks',
      skills: [
        {
          title: 'Angular',
          icon: faAngular,
          progress: 90,
        },
        {
          title: 'Ionic Framework',
          avatar:
            'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ionic-512.png',
          progress: 100,
        },
        {
          title: 'Node.js',
          icon: faNodeJs,
          progress: 60,
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
