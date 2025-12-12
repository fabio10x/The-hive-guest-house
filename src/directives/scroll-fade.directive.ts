
import { Directive, ElementRef, afterNextRender, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollFade]',
  standalone: true,
})
export class ScrollFadeDirective {
  private elementRef = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    afterNextRender(() => {
      if (isPlatformBrowser(this.platformId)) {
        this.initObserver();
      }
    });
  }

  private initObserver(): void {
    const nativeElement = this.elementRef.nativeElement as HTMLElement;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            nativeElement.classList.add('animate-fade-in');
            observer.unobserve(nativeElement);
          }
        });
      },
      { threshold: 0.1 }
    );

    nativeElement.classList.add('initial-fade-state');
    observer.observe(nativeElement);
  }
}
