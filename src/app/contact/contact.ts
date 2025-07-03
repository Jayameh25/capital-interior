import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  imports: [CommonModule]
})
export class Contact {
  showNumber = false;

  toggleContact() {
    this.showNumber = !this.showNumber;
  }
}
