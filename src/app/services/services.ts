import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services {
  faqs = [
    {
    question: 'Why Choose Capital Interior Company?',
    answer: `When it comes to selecting modular office furniture manufacturers in Gurgaon and Delhi NCR,
    Capital Interior Company stands out for its blend of custom craftsmanship, ergonomic design, and sustainable practices.
    Each piece is made from premium, eco-friendly materials...`
    },
    {
      question: 'What Types of Office Furniture Does Capital Interior Offer?',
      answer: `We offer modular workstations, executive desks, ergonomic chairs, storage solutions,
      and more for both residential and commercial office spaces.`
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Most projects are completed within 4–8 weeks, depending on scope.'
    },
    {
      question: 'Do you handle both residential and commercial spaces?',
      answer: 'Yes, Capital Interior specializes in both home and commercial interior design.'
    },
    {
      question: 'Is consultation free?',
      answer: 'Yes, the initial design consultation is absolutely free!'
    }
  ];
}
