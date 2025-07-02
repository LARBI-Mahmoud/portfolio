import { Component, Input } from '@angular/core';

export interface Project {
  title: string;
  stack: string;
  description: string;
  features: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss']
})
export class FeaturedProjectsComponent {
  @Input() projects: Project[] = [];
}
