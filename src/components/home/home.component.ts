
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollFadeDirective } from '../../directives/scroll-fade.directive';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ScrollFadeDirective, NgOptimizedImage],
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
export class HomeComponent {
  testimonials = [
    { name: 'John D.', quote: 'An absolutely wonderful stay! The staff were incredibly friendly and the rooms were pristine. Highly recommend The Hive.' },
    { name: 'Maria S.', quote: 'Perfect location and amazing service. It truly felt like a home away from home. I will definitely be back on my next trip.' },
    { name: 'David L.', quote: 'The attention to detail is what sets this place apart. Clean, comfortable, and quiet. A hidden gem in Addis Ababa.' },
  ];
}
