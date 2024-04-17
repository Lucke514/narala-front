import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }

  socials = [
    {
      socialName: '@danitzad1',
      name: 'Facebook',
      url: 'https://www.facebook.com/danitzad1'
    },
    {
      socialName: '@TiendaNarala',
      name: 'Instagram',
      url: 'https://www.instagram.com/tiendanarala/'
    },
    {
      socialName: 'Danitza Diaz Palacios',
      name: 'Whatsapp',
      url: 'https://wa.me/974464160'
    }
  ]
}
