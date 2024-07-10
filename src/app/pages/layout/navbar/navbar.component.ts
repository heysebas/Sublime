import { CommonModule } from '@angular/common';
import { Component, HostBinding, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @HostBinding('class') className = ''; // Esta variable de clase se usará para cambiar dinámicamente las clases CSS

  darkMode: boolean = false; // Inicialmente asume que no está en modo oscuro

  menuOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Detectar el tema del navegador
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.darkMode = prefersDark;

      // Asignar clases CSS dinámicamente basadas en el tema
      this.className = this.darkMode ? 'dark-theme' : 'light-theme';

      // Escuchar cambios en el tema
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        this.darkMode = e.matches;
        this.className = this.darkMode ? 'dark-theme' : 'light-theme';
      });
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
