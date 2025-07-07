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
      answer: `At Capital Interior, we combine thoughtful design with flawless execution. Our approach is highly personalized; every project is tailored to your lifestyle, preferences, and space. From concept to completion, we manage everything in-house with a strong focus on quality, timely delivery, and client satisfaction.`
    },
    {
      question: 'Do you offer custom furniture design services?',
      answer: `Yes, we specialize in custom furniture design tailored to your space, functionality needs, and aesthetic preferences. Whether it’s a statement piece or an integrated storage unit, our in-house team ensures every item complements your interior perfectly.`
    },
    {
      question: 'Can you incorporate existing furniture and decor into the design?',
      answer: `Absolutely. We understand the emotional and practical value of existing pieces. Our designers skillfully blend your current furniture and decor into the new layout to maintain continuity while enhancing the overall design.`
    },
    {
      question: 'What locations do you currently serve?',
      answer: `We primarily operate across Delhi NCR, including Noida, Greater Noida, Ghaziabad, Faridabad, and select parts of Delhi and Gurugram.`
    },
    {
      question: 'What is your typical project workflow?',
      answer: `Our process includes the following stages:<br><br>
      <ul>
        <li>Initial consultation & site assessment</li>
        <li>Concept development & budgeting</li>
        <li>2D layout & 3D design approval</li>
        <li>Material selection</li>
        <li>Execution & installation</li>
        <li>Final styling and handover</li>
      </ul>`
    },
    {
      question: 'How do I initiate a project with Capital Interior?',
      answer: `You can begin by scheduling a consultation through our website, WhatsApp, or direct call. We’ll understand your requirements, conduct a site visit, and initiate design discussions accordingly.`
    },
    {
      question: 'Do you design for small or compact homes?',
      answer: `Yes, absolutely. At Capital Interior, we specialize in optimizing compact spaces through smart layouts, multifunctional furniture, and efficient storage solutions. Our goal is to make small homes feel spacious, functional, and beautifully designed without compromising on comfort or style.`
    },
    {
      question: 'Do you work on both apartments and villas?',
      answer: `Yes. We design interiors for a wide range of residential spaces, including apartments, villas, builder floors, and independent homes. Each project is customized to suit the scale, layout, and lifestyle needs of the client — whether it's a compact city apartment or a spacious luxury villa.`
    }
  ];
}
