import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Portfolio, Skill } from '../../services/portfolio';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills implements OnInit {
  skillsByCategory: { [key: string]: Skill[] } = {};

  constructor(private portfolioService: Portfolio) {}

  ngOnInit() {
    this.skillsByCategory = this.portfolioService.getSkillsByCategory();
  }

  getCategories(): string[] {
    return Object.keys(this.skillsByCategory);
  }
}
