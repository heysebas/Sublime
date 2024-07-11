import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser, NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgClass,
    NgFor
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menuItems = [
    { name: 'Espresso', price: '$4.000' },
    { name: 'Doppio Doble espresso', price: '$5.500' },
    { name: 'Bombón Espresso leche condensada y leche cremada', price: '$6.900' },
    { name: 'Americano Espresso y agua caliente', price: '$4.000' },
    { name: 'Café campesino Espresso, canela y panela', price: '$5.900' },
    { name: 'Latte pequeño Espresso y leche cremada', price: '$4.900' },
    { name: 'Latte grande Espresso y leche cremada', price: '$6.900' },
    { name: 'Mocca Espresso, chocolate y leche cremada', price: '$7.900' },
    { name: 'Capuccino Espresso, leche cremada y leche espumada', price: '$8.900' },
    { name: 'Capuccino caramelo Espresso, salsa de caramelo y leche cremada', price: '$9.900' },
    { name: 'Capuccino Baileys Espresso, crema de whisky y leche cremada', price: '$10.900' },
    { name: 'Español clásico Espresso, leche condensada y leche cremada', price: '$10.900' },
    { name: 'Café Irlandés Espresso, whisky y leche cremada', price: '$14.900' },
    { name: 'Milo caliente', price: '$9.900' },
    { name: 'Chocolate tradicional', price: '$9.000' },
    { name: 'Chocolate Sublime Crema batida y masmelos', price: '$12.900' },
    { name: 'Aromática de frutas', price: '$5.900' },
    { name: 'Aromática del huerto', price: '$4.000' },
    { name: 'Té chai tradicional Mezcla de té con especias y hierbas aromáticas', price: '$9.900' },
    { name: 'Té chai Sublime Mezcla de té con especias y hierbas aromáticas con domo de chocolate', price: '$12.900' }

  ];

  isMobile: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 768; // Puedes ajustar el ancho según tus necesidades
    }
  }
}
