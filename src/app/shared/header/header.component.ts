import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';
// Initialization for ES Users
import { Dropdown, Ripple, initTWE } from "tw-elements";


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

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }

  async loadHeader() {
    // Importar el módulo de tw-elements solo si estamos en el navegador
    const { Dropdown, Ripple, initTWE } = await import("tw-elements");
    initTWE({ Dropdown, Ripple });
  }

}
