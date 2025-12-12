
import { Component, ChangeDetectionStrategy, signal, HostListener, effect, PLATFORM_ID, inject, afterNextRender } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive]
})
export class HeaderComponent {
  isMenuOpen = signal(false);
  isScrolled = signal(false);
  platformId = inject(PLATFORM_ID);

  constructor() {
    afterNextRender(() => {
      if (isPlatformBrowser(this.platformId)) {
        window.addEventListener('scroll', this.onWindowScroll.bind(this), { passive: true });
        this.onWindowScroll(); // Initial check
      }
    });
  }

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
  
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 10);
  }
}
