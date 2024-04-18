import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadHeader();
    }
  }
  async loadHeader() {
    // Importar el módulo de tw-elements solo si estamos en el navegador
    const { Dropdown, Ripple, initTWE } = await import("tw-elements");
    initTWE({ Dropdown, Ripple });
  }

}
