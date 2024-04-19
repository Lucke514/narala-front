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
      price: 5490,
      discount: 0,
      description: 'Repuesto Shampoo purificante Cabello Liso',
      image: 'https://production.na01.natura.com/on/demandware.static/-/Sites-natura-cl-storefront-catalog/default/dw80b4dc6a/2023-01-28/86944_1.jpg'
    },
    {
      name: 'Crema',
      price: 7560,
      discount: 0,
      description: 'Repuesto crema nutritiva para cuerpo frambuesa y pimienta rosa - 400ml',
      image: 'https://production.na01.natura.com/on/demandware.static/-/Sites-natura-cl-storefront-catalog/default/dw28998b1d/2023-01-28/2819_1.jpg'
    },
    {
      name: 'jabón líquido',
      price: 7490,
      discount: 0,
      description: 'Repuesto Jabon Liquido Corporal Avellana y Casis Tododia 300ml',
      image: 'https://production.na01.natura.com/on/demandware.static/-/Sites-natura-cl-storefront-catalog/default/dwfafda2e9/2023-01-28/86337_1.jpg'
    },
    {
      name: 'Desodorante',
      price: 7590,
      discount: 0,
      description: 'Desodorante Roll-On Tododia Flor de Lis 70ml',
      image: 'https://production.na01.natura.com/on/demandware.static/-/Sites-natura-cl-storefront-catalog/default/dwed89616b/NATCHL-123131_1.jpg'
    },
    {
      name: 'Shampoo',
      price: 6790,
      discount: 1670,
      description: 'Shampoo Matizador Cabello Rubio o con Canas',
      image: 'https://production.na01.natura.com/on/demandware.static/-/Sites-natura-cl-storefront-catalog/default/dwcf36691a/job_images/74053_1.jpg'
    },
    {
      name: 'Crema',
      price: 12990,
      discount: 0,
      description: 'Crema Nutritiva para el Cuerpo Tododia Frutas Rojas',
      image: 'https://production.na01.natura.com/on/demandware.static/-/Sites-natura-cl-storefront-catalog/default/dwb1ca858e/2023-01-28/74900_1.jpg'
    }
  ]
}
