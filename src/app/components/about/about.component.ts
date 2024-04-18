import { Component } from '@angular/core';
import { SliderImagesComponent } from '../../shared/slider-images/slider-images.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    SliderImagesComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
}
