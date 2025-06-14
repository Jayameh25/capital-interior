import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Gallery } from './gallery/gallery';
import { Contact } from './contact/contact';
import { WhatWeDoComponent } from './what-we-do/what-we-do';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'gallery', component: Gallery },
  { path: 'contact', component: Contact },
  { path: 'what-we-do', component: WhatWeDoComponent },
];
