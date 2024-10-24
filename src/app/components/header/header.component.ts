import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isDarkTheme = false;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const body = document.body;
    if (this.isDarkTheme) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }

    // Store the theme preference in localStorage
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
  }

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkTheme = savedTheme === 'dark';
    const body = document.body;
    if (this.isDarkTheme) {
      body.classList.add('dark-theme');
    }
  }
  
}
