import { Injectable } from '@angular/core';

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

@Injectable({
  providedIn: 'root'
})
export class Portfolio {

  private skills: Skill[] = [
    // Frontend
    { name: 'Angular', level: 95, category: 'Frontend' },
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 95, category: 'Frontend' },
    { name: 'JavaScript', level: 95, category: 'Frontend' },
    { name: 'HTML5/CSS3', level: 95, category: 'Frontend' },
    { name: 'SCSS/Sass', level: 90, category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', level: 90, category: 'Backend' },
    { name: 'Express.js', level: 85, category: 'Backend' },
    { name: 'NestJS', level: 85, category: 'Backend' },
    { name: 'Python', level: 80, category: 'Backend' },
    { name: 'Django', level: 75, category: 'Backend' },
    { name: 'FastAPI', level: 80, category: 'Backend' },
    
    // Database
    { name: 'MongoDB', level: 85, category: 'Database' },
    { name: 'PostgreSQL', level: 80, category: 'Database' },
    { name: 'MySQL', level: 80, category: 'Database' },
    
    // DevOps & Tools
    { name: 'Docker', level: 85, category: 'DevOps' },
    { name: 'Git', level: 95, category: 'DevOps' },
    { name: 'CI/CD', level: 80, category: 'DevOps' },
  ];

  private projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Angular and Node.js, featuring real-time inventory management, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe API', 'Socket.io'],
      liveUrl: 'https://demo-ecommerce.com',
      githubUrl: 'https://github.com/username/ecommerce-platform',
      featured: true
    },
    {
      id: 2,
      title: 'Real-Time Chat Application',
      description: 'A modern chat application with real-time messaging, file sharing, and video calls using WebRTC technology.',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
      technologies: ['React', 'Socket.io', 'WebRTC', 'Express.js', 'PostgreSQL'],
      liveUrl: 'https://demo-chat.com',
      githubUrl: 'https://github.com/username/chat-app',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management Dashboard',
      description: 'A comprehensive project management tool with team collaboration features, time tracking, and analytics.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
      liveUrl: 'https://demo-taskmanager.com',
      githubUrl: 'https://github.com/username/task-manager',
      featured: true
    },
    {
      id: 4,
      title: 'Financial Analytics Platform',
      description: 'A data visualization platform for financial analytics with interactive charts and real-time market data.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Angular', 'D3.js', 'Python', 'Django', 'WebSockets'],
      githubUrl: 'https://github.com/username/finance-analytics'
    },
    {
      id: 5,
      title: 'IoT Monitoring System',
      description: 'A scalable IoT monitoring system for smart devices with real-time data processing and alerting.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MQTT', 'InfluxDB', 'Grafana'],
      githubUrl: 'https://github.com/username/iot-monitoring'
    },
    {
      id: 6,
      title: 'AI-Powered Content Generator',
      description: 'A content generation platform using AI/ML models for automated blog writing and social media content.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'OpenAI API', 'TensorFlow', 'MongoDB', 'Vercel'],
      githubUrl: 'https://github.com/username/ai-content-generator'
    }
  ];

  private experiences: Experience[] = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      duration: '2022 - Present',
      description: [
        'Led development of microservices architecture serving 1M+ users',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews',
        'Architected scalable solutions using cloud technologies'
      ],
      technologies: ['Angular', 'Node.js', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      duration: '2020 - 2022',
      description: [
        'Built complete web applications from concept to deployment',
        'Integrated third-party APIs and payment processing systems',
        'Optimized application performance improving load times by 40%',
        'Collaborated with design team to implement responsive UI/UX'
      ],
      technologies: ['React', 'Express.js', 'MongoDB', 'Stripe', 'Heroku']
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      duration: '2019 - 2020',
      description: [
        'Developed responsive websites for various clients',
        'Implemented modern JavaScript frameworks and libraries',
        'Collaborated with backend team for API integration',
        'Ensured cross-browser compatibility and accessibility standards'
      ],
      technologies: ['Vue.js', 'JavaScript', 'SCSS', 'Webpack', 'REST APIs']
    },
    {
      id: 4,
      title: 'Junior Web Developer',
      company: 'WebDev Studio',
      duration: '2018 - 2019',
      description: [
        'Assisted in building client websites using HTML, CSS, and JavaScript',
        'Learned modern development practices and version control',
        'Participated in agile development processes',
        'Gained experience with content management systems'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'Git']
    }
  ];

  getSkills(): Skill[] {
    return this.skills;
  }

  getProjects(): Project[] {
    return this.projects;
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }

  getExperiences(): Experience[] {
    return this.experiences;
  }

  getSkillsByCategory(): { [key: string]: Skill[] } {
    return this.skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {} as { [key: string]: Skill[] });
  }
}
