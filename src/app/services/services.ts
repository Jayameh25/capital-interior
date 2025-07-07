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
      question: 'What makes Capital Interior stand out among other interior design companies?',
      answer: `Capital Interior stands out for its creative excellence, personalized approach, and commitment to quality. We deliver tailor-made solutions that reflect our clients’ lifestyle and preferences. Our transparent process, timely execution, and attention to detail make us a trusted name in residential and commercial design.`
    },
    {
      question: 'Do you offer custom furniture design services?',
      answer: `Yes, we specialize in custom furniture design to perfectly match your space, style, and functionality needs. From wardrobes to TV units and modular kitchens, our bespoke solutions are crafted with precision and top-grade materials.`
    },
    {
      question: 'Can you incorporate existing furniture and decor into the design?',
      answer: `Absolutely. We’re happy to integrate your existing furniture and decor into the new design plan. Our goal is to create a harmonious look that respects your current pieces while enhancing the overall space.`
    },
    {
      question: 'What locations do you currently serve?',
      answer: `We currently serve Delhi NCR, including Gurgaon, Noida, Faridabad, and surrounding regions. We’re expanding fast and ready to discuss projects in nearby locations as well.`
    },
    {
      question: 'What is your typical project workflow?',
      answer: `Our process includes:<br>
      <ol>
        <li>Free consultation and site visit</li>
        <li>Concept design and layout</li>
        <li>3D visualization and material selection</li>
        <li>Execution and regular updates</li>
        <li>Final installation and handover</li>
      </ol>
      We maintain clear communication and timely updates at every stage.`
    },
    {
      question: 'How do I initiate a project with Capital Interior?',
      answer: `Just contact us through our website, WhatsApp, or call directly. We’ll schedule a free consultation to understand your needs and take it from there.`
    },
    {
      question: 'Do you design for small or compact homes?',
      answer: `Yes! We excel in optimizing small and compact spaces without compromising on style or functionality. Our smart storage solutions and space-saving furniture work beautifully for urban homes.`
    },
    {
      question: 'Do you work on both apartments and villas?',
      answer: `Yes, we work on a wide range of property types including apartments, villas, builder floors, and even office spaces. Every project gets the same level of attention and customization.`
    },
    {
      question: 'What Types of Office Furniture Does Capital Interior Offer?',
      answer: `We offer modular workstations, executive desks, ergonomic chairs, storage solutions, and more for both residential and commercial office spaces.`
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Most projects are completed within 4–8 weeks, depending on the scope and complexity.'
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
