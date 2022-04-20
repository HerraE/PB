import { Component, OnInit } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons/faAngular';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public links: any[] = [
    { icon: faAngular, link: 'https://angular.io/' },
    { icon: faGithub, link: 'https://github.com/' },
    { icon: faLinkedin, link: 'https://www.linkedin.com/' },
  ];

  constructor() {}

  ngOnInit() {}
}
