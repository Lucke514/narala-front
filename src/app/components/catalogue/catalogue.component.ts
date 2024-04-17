import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }

  products = [
    {
      name: 'Shampoo',
      price: 100,
      discount: 0,
      description: 'Repuesto Shampoo purificante Cabello Liso',
      image: 'https://production.na01.natura.com/on/demandware.static/-/Sites-natura-cl-storefront-catalog/default/dw80b4dc6a/2023-01-28/86944_1.jpg'
    },
    {
      name: 'Crema',
      price: 200,
      discount: 20,
      description: 'Repuesto crema nutritiva para cuerpo frambuesa y pimienta rosa - 400ml',
      image: 'https://production.na01.natura.com/on/demandware.static/-/Sites-natura-cl-storefront-catalog/default/dw28998b1d/2023-01-28/2819_1.jpg'
    },
    {
      name: 'jabón líquido',
      price: 150,
      discount: 15,
      description: 'Repuesto Jabon Liquido Corporal Avellana y Casis Tododia 300ml',
      image: 'https://production.na01.natura.com/on/demandware.static/-/Sites-natura-cl-storefront-catalog/default/dwfafda2e9/2023-01-28/86337_1.jpg'
    },
    {
      name: 'Desodorante',
      price: 50,
      discount: 0,
      description: 'Desodorante Roll-On Tododia Flor de Lis 70ml',
      image: 'https://production.na01.natura.com/on/demandware.static/-/Sites-natura-cl-storefront-catalog/default/dw02c8b8b3/2023-01-28/73179_1.jpg'
    },
    {
      name: 'Protector Solar',
      price: 300,
      discount: 30,
      description: 'Protector Solar Facial FPS 60 Chronos 50ml',
      image: 'https://production.na01.natura.com/on/demandware.static/-/Sites-natura-cl-storefront-catalog/default/dw5e6b0f4a/2023-01-28/86338_1.jpg'
    },
    {
      name: 'Perfume',
      price: 250,
      discount: 25,
      description: 'Perfume Femenino Luna Intenso 75ml',
      image: 'https://production.na01.natura.com/on/demandware.static/-/Sites-natura-cl-storefront-catalog/default/dw5e6b0f4a/2023-01-28/86338_1.jpg'
    }
  ]
}
