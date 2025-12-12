import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ScrollFadeDirective } from '../../directives/scroll-fade.directive';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollFadeDirective, NgOptimizedImage, RouterLink],
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
  `]
})
export class RoomsComponent {
  rooms = [
    {
      name: 'Standard Queen Room',
      price: 'ETB 3,500',
      description: 'Perfect for solo travelers or couples, our Standard Queen Room offers a cozy retreat with all the essential amenities for a comfortable stay.',
      amenities: ['Queen Bed', 'Free Wi-Fi', 'Flat-screen TV', 'En-suite Bathroom'],
      imageUrl: 'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU='
    },
    {
      name: 'Deluxe King Room',
      price: 'ETB 4,800',
      description: 'Experience extra space and comfort in our Deluxe King Room. Featuring a plush king-sized bed and upgraded amenities for a more luxurious feel.',
      amenities: ['King Bed', 'High-speed Wi-Fi', 'Mini-fridge', 'Work Desk', 'Rain Shower'],
      imageUrl: 'https://media.istockphoto.com/id/1318363878/photo/luxury-modern-bedroom-interior-at-night.jpg?s=612x612&w=0&k=20&c=riYXhwiUWYzqv7iA060mb14a5b7QdjZhUeqoyNoyyts='
    },
    {
      name: 'Executive Suite',
      price: 'ETB 6,200',
      description: 'Our Executive Suite is the pinnacle of comfort, offering a separate living area, premium amenities, and stunning city views for an unforgettable stay.',
      amenities: ['King Bed', 'Separate Living Area', 'Premium Wi-Fi', 'Stocked Minibar', 'City View'],
      imageUrl: 'https://media.istockphoto.com/id/1066999762/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.jpg?s=612x612&w=0&k=20&c=kh1SoNvZYDdAFOadeKxPVssVKVzbMTIuOHQu-RBDoX0='
    }
  ];
}