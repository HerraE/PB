import { Component, OnInit } from '@angular/core';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons/faChalkboardTeacher';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons/faIdCard';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons/faLightbulb';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public headerItems: any[] = [
    { icon: faHome, text: 'Home', link: '/home' },
    { icon: faIdCard, text: 'CV', link: '/cv' },
    { icon: faLightbulb, text: 'Skills', link: '/skills' },
    { icon: faBriefcase, text: 'Portfolio', link: '/portfolio' },
    { icon: faChalkboardTeacher, text: 'Tutorials', link: '/tutorials' },
  ];

  constructor() {}

  ngOnInit() {}
}
