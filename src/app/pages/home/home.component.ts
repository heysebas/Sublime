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

  menuItems11 = [
    { name11: 'Huevos teriyaki Huevos pochados en reducción de salsa teriyaki, aguacate, pan artesanal de la casa y aceite de ajonjolí', price11: '$18.9 00' },
    { name11: 'Huevos florentinos Huevos pochados en salsa bearnesa, pure de aguacate, queso crema de paprika, pan artesanal de la casa y tomates al romero', price11: '$19.900' },
    { name11: 'Sanduche de croissant Croissant mantequilla, huevos pochados con aguacate, tocineta y salsa bearnesa', price11: '$19.900' },
    { name11: 'Calentado paisa Arroz con frijoles, arepa con queso, huevo, aguacate y una proteína a elección (Milanesa de cerdo, chorizo o chicharrón)', price11: '$22.900' },
    { name11: 'Calentado paisa especial Arroz con frijoles, milanesa de cerdo, chorizo, chicharrón, arepa con queso, huevo y aguacate', price11: '$28.900' },
    { name11: 'Pancakes originales Tres pancakes mantequilla, tocineta y miel maple', price11: '$15.900' },
    { name11: 'Pancakes fantasía Pancakes de arándanos, fresas y chocolate, miel maple', price11: '$18.900' },
    { name11: 'Tostadas francesas Pan artesanal de la casa rebosado, fresas y arándanos, azúcar glass y canela; miel maple de cítricos', price11: '$18.900' },
    { name11: 'Sanduche de pandebono  Pandebono y huevos pochados con aguacate, tocineta y salsa bearnesa', price11: '$19.900' },
    { name11: 'Parfait Granola, yogurt, duraznos, fresa, kiwi y crema batida', price11: '$18.900' },
    { name11: 'Huevos al gusto Fritos o revueltos, acompañados con pan de la casa', price11: '$7.900' },
    { name11: 'Jamón', price11: '$4.900' },
    { name11: 'Queso Mozarella', price11: '$2.900' },
    { name11: 'Tocineta', price11: '$6.900' },
    { name11: 'Queso campesino', price11: '$2.900' }
  ];


  menuItems12 = [
    { name12: 'Crema pomodoro Crema de tomate con tocineta queso mozzarella, aguacate y panela rayada ', price12: '$24.900' },
    { name12: 'Crema dos colores Crema de champiñones París y tomate; queso parmesano', price12: '$21.900' },
    { name12: 'Tacos kanikama crunch Tres unidades de tacos crocantes con palmitos de cangrejo en mayonesa japonesa picante y mango', price12: '$29.900' },
    { name12: ' Hamburguesa Sublime Pan brioche artesanal de la casa, carne de res, tocineta, queso mozzarella, salsa Sublime, lechuga, tomate y aros de cebolla', price12: '$20.900' },
    { name12: 'Con papas a la francesa', price12: '$26.900' },
    { name12: 'Sanduche roast beef Pan artesanal de la casa, lonjas de carne de res, queso mozzarella, salsa Sublime, lechuga, tomate y papas a la francesa', price12: '$26.900' },
    { name12: 'Chicharrones Sublime Crocante tocino de cerdo con arepa y patacones', price12: '$26.900' },
    { name12: 'Chorizos Sublime Dos chorizos artesanales con arepa y patacones', price12: '$18.900' },
    { name12: 'Picada tradicional (3 pax) Costilla de cerdo, pollo, chicharrón, chorizo, arepa, patacones, papas a la francesa y tomates', price12: '$59.900' },
    { name12: 'Totopos Sublime (2 pax) Nachos con carne de res desmechada, guacamole, pico de gallo, crema agria, queso cheddar y queso mozzarella', price12: '$39.900' }
  ];


  menuItems13 = [
    { name13: 'Bowl avena Avena cocinada con fresas, banano, arándanos, semillas de chía, almendras laminadas, chocolate semiamargo y canela ', price13: '$18.900' },
    { name13: 'Pollo & Mango Cubos de pollo teriyaki, arroz al ajonjolí, mix de hojas verdes, aguacate, mango, tomates cherry y semillas de ajonjo', price13: '$26.900' },
    { name13: 'Salmón & Piña Cubos de salmón, arroz al ajonjolí, mix de hojas verdes, aguacate, piña, tomates cherry y semillas de ajonjolí, salsa de miel mostaza y anís ', price13: '$29.900' }
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
