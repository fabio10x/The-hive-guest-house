
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';

export const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home | The Hive Guest House' },
  { path: 'about', component: AboutComponent, title: 'About Us | The Hive Guest House' },
  { path: 'rooms', component: RoomsComponent, title: 'Our Rooms | The Hive Guest House' },
  { path: 'gallery', component: GalleryComponent, title: 'Gallery | The Hive Guest House' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us | The Hive Guest House' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' } // Wildcard route for a 404 page
];
