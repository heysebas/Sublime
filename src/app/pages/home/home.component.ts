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
  ];

  menuItems2 = [
    { name2: 'Espresso en agua o leche', price2: '$8.900' },
    { name2: 'Arequipe Sublime Espresso, arequipe, leche, crema batida y borde de arequipe con almendras', price2: '$12.900' },
    { name2: 'Caramelo Sublime Espresso, salsa de caramelo, leche, crema batida y borde de caramelo con almendras', price2: '$12.900' },
    { name2: 'Milo frío', price2: '$12.900' },
    { name2: 'Té chai frío Mezcla de té con especias y hierbas aromáticas', price2: '$12.900' },
    { name2: 'Té matcha Sublime Antioxidante y energizante té japones con sirope de rosas', price2: '$12.900' },
    { name2: 'Botella de agua natural', price2: '$5.000' },
    { name2: 'Botella de agua natural con gas', price2: '$5.000' }
  ];

  menuItems3 = [
    { name3: 'Fresa y poleo Fresa, sirope de poleo, limón  y carbonatada', price3: '$11.900' },
    { name3: 'Mango y tomillo Mango, sirope de tomillo, limón y carbonatada', price3: '$11.900' },
    { name3: 'Manzana verde y albahaca Manzana verde, sirope de albahaca, limón y carbonatada', price3: '$11.900' }
  ];

  menuItems4 = [
    { name4: 'Limonada de coco', price4: '$12.900' },
    { name4: 'Limonada natural Fresa, albahaca y limón', price4: '$9.000' },
    { name4: 'Limonada Sublime ', price4: '$12.900' }
  ];

  menuItems5 = [
    { name5: 'Verano Sublime Fresa, piña, naranja y miel', price5: '$15.900' },
    { name5: 'Pasión Sublime Maracuyá, piña, naranja y miel', price5: '$15.900' },
    { name5: 'Súper Détox Manzana verde, pepino, apio, kiwi y miel', price5: '$15.900' }
  ];

  menuItems6 = [
    { name6: 'Baileys Ferrero Vodka, espresso, crema de whisky, salsa de chocolate y almendras', price6: '$32.900' },
    { name6: 'Gin Sandía Ginebra Gordons, esferas de sandía y tónica Rose - Cider', price6: '$32.900' },
    { name6: 'Paloma Sublime Vodka de pandebono, espresso, limón y tónica de toronja', price6: '$32.900' },
    { name6: 'Sangría (4 pax) Tipo de vino de la casa a elección. Manzana verde y roja, arándanos, botánico, ron, licor de cítricos y jugo de naranja', price6: '$99.900' }
  ];

  menuItems7 = [
    { name7: 'Aperitivo de hierbas, ginebra, naranja y vino seco', price7: '$24.900' },
    { name7: 'Dry Martini Ginebra Gordons, vino vermut rosso y aceitunas', price7: '$24.900' },
    { name7: 'Gin Tonic Gordons Ginebra Gordons, naranja deshidratada y tónica ElderFlower', price7: '$29.900' },
    { name7: 'Gin tonic Hendricks Ginebra Hendricks, pepino y tónica ElderFlower', price7: '$49.900' },
    { name7: 'Lychee Martiny Vodka, licor de lychees y lychees en almíbar', price7: '$29.900' },
    { name7: 'Paloma Sirope de flor de jamaica, tequila, limón y tónica de toronja ', price7: '$28.900' },
    { name7: 'Margarita Tequila, licor de cítricos, limón, sal y tajín', price7: '$24.900' },
    { name7: 'Margarita de maracuyá Tequila, sirope de maracuyá, limón, sal y tajín', price7: '$29.900' },
    { name7: 'Mimosa Vino espumoso y jugo de naranja y cereza en almíbar', price7: '$18.900' },
    { name7: 'Mojito Hierbabuena, limón, ron y carbonatada', price7: '$18.900' },
    { name7: 'Mojito Maracuyá Hierbabuena, sirope de maracuyá, limón, ron y carbonatada', price7: '$23.900' },
    { name7: 'Moscow mule Vodka, limón y cerveza de jengibre', price7: '$32.900' },
    { name7: 'Negroni Licor de hierbas amargas, ginebra Gordons, vino vermut rosso y piel de naranja', price7: '$30.900' }

  ];

  menuItems8 = [
    { name8: 'Cucurucho Helado yogurt tradicional ', price8: '$5.900' },
    { name8: 'Helado yogurt frutos rojos', price8: '$6.200' },
    { name8: 'Helado yogurt tradicional Pequeño', price8: '$7.700' },
    { name8: 'Helado yogurt tradicional Mediano', price8: '$8.900' },
    { name8: 'Helado yogurt tradicional Grande', price8: '$10.000' },
    { name8: 'Helado yogurt frutos rojos Pequeño', price8: '$7.700' },
    { name8: 'Helado yogurt frutos rojos Mediano', price8: '$8.900' },
    { name8: 'Helado yogurt frutos rojos Grande', price8: '$10.000' },
    { name8: 'Mixo yogurt tradicional 4 adiciones básicas a elección incluidas Pequeño', price8: '$18.000' },
    { name8: 'Mixo yogurt tradicional 4 adiciones básicas a elección incluidas Grande', price8: '$20.000' },
    { name8: 'Mixo yogurt frutos rojos 4 adiciones básicas a elección incluidas Pequeño', price8: '$20.000' },
    { name8: 'Mixo yogurt frutos rojos 4 adiciones básicas a elección incluidas Grande', price8: '$21.000' }
  ];

  menuItems9 = [
    { name9: 'Toppings básicos: Almendras . Chips de chocolate . blanco o negro . Choco Crunchie . Coco . Fresa . Guanábana . Kiwi . Mango . Maní . Maracuyá . Masmelos . Melocotón . Mora . Galleta chocolate triturada . Piña . Sandía . Suspiros . Tuti Fruti', price9: '$2.000' },
    { name9: 'Premium: Arándanos . Brownie chocolate o vainilla . Cereza . Chessecake . Explosión fresa o lychees . Gomitas . Granola . Lychees . Milo . M&M´s', price9: '$2.900' },
    { name9: 'Salsas: Leche condensada . Miel . Arequipe, Chocolate .  Frutos rojos', price9: '$1.600' },
    { name9: 'Coberturas Chocolate blanco', price9: '$4.900' },
    { name9: 'Coberturas  Chocolate negro', price9: '$3.900' }
  ];

  menuItems10 = [
    { name10: 'Croissant mantequilla', price10: '$4.500' },
    { name10: 'Croissant jamón y queso', price10: '$6.900' },
    { name10: 'Croissant almendras', price10: '$5.900' },
    { name10: 'Croissant chocolate negro', price10: '$5.900' },
    { name10: 'Croissant chocolate blanco', price10: '$5.900' },
    { name10: 'Croissant pistacho', price10: '$7.900' },
    { name10: 'Croissant fresa', price10: '$7.900' },
    { name10: 'Alfajor arequipe', price10: '$4.800' },
    { name10: 'Palito de queso', price10: '$4.800' },
    { name10: 'Pandebono', price10: '$4.200' },
    { name10: 'Pandeyuca', price10: '$4.200' },
    { name10: 'Pandequeso', price10: '$4.200' },
    { name10: 'Rollo de canela', price10: '$5.900' },
    { name10: 'Galletas: Multicereal, Red velvet, Macadamia', price10: '$5.900' },
    { name10: 'Tortas Completas: Marmoleado . Chocolate . Genovesa . Red Velvet . Zanahoria . Pandebono', price10: '$99.000' },
    { name10: 'Cheesecake', price10: '$130.900' },
    { name10: 'Porciones:  Marmoleado . Pandebono . Chocolate . Genovesa . Red Velvet  .  Zanahoria . Milhoja', price10: '$8.900' },
    { name10: 'Tiramisú . Cheesecake', price10: '$10.000' },
    { name10: 'Mini tortas: Chocolate . Red Velvet . Zanahoria', price10: '$16.900' },
    { name10: 'Tartaletas: Frutos rojos . Maracuyá . Pie de limón cake', price10: '$8.900' }
  ];





  isMobile: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

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
