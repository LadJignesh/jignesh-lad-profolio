import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Portfolio, Experience as WorkExperience } from '../../services/portfolio';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience implements OnInit {
  experiences: WorkExperience[] = [];

  constructor(private portfolioService: Portfolio) {}

  ngOnInit() {
    this.experiences = this.portfolioService.getExperiences();
  }
}
