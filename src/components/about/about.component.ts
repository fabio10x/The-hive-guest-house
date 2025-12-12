
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ScrollFadeDirective } from '../../directives/scroll-fade.directive';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
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
  `]
})
export class AboutComponent {}
