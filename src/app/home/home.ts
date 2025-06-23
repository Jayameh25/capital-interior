import { Component } from '@angular/core';
import { WhyChooseUs } from '../why-choose-us/why-choose-us';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, WhyChooseUs],
  template: `
    <!-- Your home content goes here -->

    <!-- ✅ Why Choose Us block here -->
    <app-why-choose-us></app-why-choose-us>
  `
})
export class Home {}
