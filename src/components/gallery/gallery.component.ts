import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ScrollFadeDirective } from '../../directives/scroll-fade.directive';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollFadeDirective, NgOptimizedImage],
  styles: [`
    .initial-fade-state {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    .animate-fade-in {
      opacity: 1;
      transform: translateY(0);
    }
    .gallery-item {
        transition: transform 0.3s ease-in-out;
    }
    .gallery-item:hover {
        transform: scale(1.05);
        z-index: 10;
    }
  `]
})
export class GalleryComponent {
  images = [
    { url: 'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=', alt: 'Bright hotel room with a city view' },
    { url: 'https://media.istockphoto.com/id/1318363878/photo/luxury-modern-bedroom-interior-at-night.jpg?s=612x612&w=0&k=20&c=riYXhwiUWYzqv7iA060mb14a5b7QdjZhUeqoyNoyyts=', alt: 'Luxurious bedroom interior at night' },
    { url: 'https://media.istockphoto.com/id/1066999762/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.jpg?s=612x612&w=0&k=20&c=kh1SoNvZYDdAFOadeKxPVssVKVzbMTIuOHQu-RBDoX0=', alt: 'Spacious and modern hotel suite with a TV' },
    { url: 'https://media.istockphoto.com/id/1482326431/photo/interior-bedroom-wall-mockup-3d-rendering-3d-illustration.jpg?s=612x612&w=0&k=20&c=-Smt8qpPo5OxmCKuPC36VSj80rJPeM1_dWZ6a-CHCog=', alt: 'Stylishly decorated bedroom interior' },
    { url: 'https://media.istockphoto.com/id/936331412/photo/breakfast-served-on-a-hotel-bed.jpg?s=612x612&w=0&k=20&c=_Egb-XD5NTnKezrBYJsOkjHu3_I_g1U1Z804h0-uQ8E=', alt: 'Delicious breakfast served on a hotel bed' },
    { url: 'https://media.istockphoto.com/id/1980326931/photo/modern-cozy-bedroom-in-pastel-tones.jpg?s=612x612&w=0&k=20&c=Bg4ndZQqPT3phgwstL8ULQs_JEJazdrFOvdsI6_KNks=', alt: 'Modern and cozy bedroom in pastel tones' }
  ];
}