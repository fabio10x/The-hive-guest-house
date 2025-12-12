
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { ScrollFadeDirective } from '../../directives/scroll-fade.directive';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollFadeDirective],
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
export class ContactComponent {
  formSubmitted = signal(false);

  submitForm(event: Event) {
    event.preventDefault();
    // In a real app, you would handle form submission here.
    // For this demo, we'll just show a success message.
    this.formSubmitted.set(true);
  }
}
