import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';
import AOS from 'aos';
import { ContactComponent } from '../../components/contact/contact.component';
import { CatalogueComponent } from '../../components/catalogue/catalogue.component';
import { MapComponent } from '../../components/map/map.component';
import { AboutComponent } from '../../components/about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    MapComponent,
    CatalogueComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }
}
