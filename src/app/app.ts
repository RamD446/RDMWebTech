import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Dashboard } from './components/dashboard/dashboard';
@Component({
  selector: 'app-root',
  imports: [Header,Footer,Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rdmwebtech');
  ngOnInit(): void {
    const body = document.body;
    const themeBtn = document.getElementById("themeBtn") as HTMLButtonElement;
    const themeIcon = document.getElementById("themeIcon") as HTMLElement;

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
    }

    // Toggle theme on click
    themeBtn.addEventListener("click", () => {
      body.classList.toggle("dark-mode");

      if (body.classList.contains("dark-mode")) {
        themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
        localStorage.setItem("theme", "dark");
      } else {
        themeIcon.classList.replace("bi-sun-fill", "bi-moon-fill");
        localStorage.setItem("theme", "light");
      }
    });
  }
}
