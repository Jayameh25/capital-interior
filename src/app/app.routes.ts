import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Gallery } from './gallery/gallery';
import { Contact } from './contact/contact';
import { WhatWeDoComponent } from './what-we-do/what-we-do';
import { WhyChooseUs } from './why-choose-us/why-choose-us';
import { Services } from './services/services';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'gallery', component: Gallery },
  { path: 'contact', component: Contact },
  { path: 'what-we-do', component: WhatWeDoComponent },
  { path: 'why-choose-us', component: WhyChooseUs },
  { path: 'services', component: Services },
];
