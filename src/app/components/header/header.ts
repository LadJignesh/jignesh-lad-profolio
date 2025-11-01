import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;

  ngOnInit() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  downloadResume(event: Event) {
    event.preventDefault();
    const baseUrl = window.location.origin;
    const projectPath = '/jignesh-lad-profolio'; // Add this for GitHub Pages
    const resumePath = `${baseUrl}${projectPath}/assets/documents/resume.pdf`;
    window.open(resumePath, '_blank');
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
