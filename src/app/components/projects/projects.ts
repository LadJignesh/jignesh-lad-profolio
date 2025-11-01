import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Portfolio, Project } from '../../services/portfolio';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit {
  featuredProjects: Project[] = [];
  allProjects: Project[] = [];
  showAllProjects = false;

  constructor(private portfolioService: Portfolio) {}

  ngOnInit() {
    this.featuredProjects = this.portfolioService.getFeaturedProjects();
    this.allProjects = this.portfolioService.getProjects();
  }

  toggleShowAll() {
    this.showAllProjects = !this.showAllProjects;
  }

  getDisplayedProjects(): Project[] {
    return this.showAllProjects ? this.allProjects : this.featuredProjects;
  }
}
