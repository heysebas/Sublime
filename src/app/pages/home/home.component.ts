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
    { name: 'Té chai Sublime Mezcla de té con especias y hierbas aromáticas con domo de chocolate', price: '$12.900' },
    

    { name2: 'Espresso en agua o leche', price2: '$8.900' },
    { name2: 'Arequipe Sublime Espresso, arequipe, leche, crema batida y borde de arequipe con almendras', price2: '$12.900' },
    { name2: 'Caramelo Sublime Espresso, salsa de caramelo, leche, crema batida y borde de caramelo con almendras', price2: '$12.900' },
    { name2: 'Milo frío', price2: '$12.900' },
    { name2: 'Té chai frío Mezcla de té con especias y hierbas aromáticas', price2: '$12.900' },
    { name2: 'Té matcha Sublime Antioxidante y energizante té japones con sirope de rosas', price2: '$12.900' },
    { name2: 'Botella de agua natural', price2: '$5.000' },
    { name2: 'Botella de agua natural con gas', price2: '$5.000' },


    { name3: 'Fresa y poleo Fresa, sirope de poleo, limón  y carbonatada', price3: '$11.900' },
    { name3: 'Mango y tomillo Mango, sirope de tomillo, limón y carbonatada', price3: '$11.900' },
    { name3: 'Manzana verde y albahaca Manzana verde, sirope de albahaca, limón y carbonatada', price3: '$11.900' },


    { name4: 'Limonada de coco', price4: '$12.900' },
    { name4: 'Limonada natural Fresa, albahaca y limón', price4: '$9.000' },
    { name4: 'Limonada Sublime ', price4: '$12.900' },


    { name5: 'Verano Sublime Fresa, piña, naranja y miel', price5: '$15.900' },
    { name5: 'Pasión Sublime Maracuyá, piña, naranja y miel', price5: '$15.900' },
    { name5: 'Súper Détox Manzana verde, pepino, apio, kiwi y miel', price5: '$15.900' },

    { name6: 'Baileys Ferrero Vodka, espresso, crema de whisky, salsa de chocolate y almendras', price6: '$32.900' },
    { name6: 'Gin Sandía Ginebra Gordons, esferas de sandía y tónica Rose - Cider', price6: '$32.900' },
    { name6: 'Paloma Sublime Vodka de pandebono, espresso, limón y tónica de toronja', price6: '$32.900' },
    { name6: 'Sangría (4 pax) Tipo de vino de la casa a elección. Manzana verde y roja, arándanos, botánico, ron, licor de cítricos y jugo de naranja', price6: '$99.900' }

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
