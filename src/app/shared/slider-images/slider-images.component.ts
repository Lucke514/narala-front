import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Tooltip, initTWE } from 'tw-elements';

@Component({
  selector: 'app-slider-images',
  standalone: true,
  imports: [],
  templateUrl: './slider-images.component.html',
  styleUrl: './slider-images.component.css'
})
export class SliderImagesComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadCarousel();
    }
  }

  async loadCarousel() {
    // Importar el módulo de tw-elements solo si estamos en el navegador
    const { Carousel, initTWE } = await import("tw-elements");
    initTWE({ Carousel });
  }

}
