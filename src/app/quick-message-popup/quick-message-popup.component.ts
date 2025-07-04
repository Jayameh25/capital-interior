import { Component, HostListener, signal } from '@angular/core';
import { NgIf } from '@angular/common'; 
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'quick-message-popup',
  standalone: true,
  templateUrl: './quick-message-popup.component.html',
  styleUrls: ['./quick-message-popup.component.css'],
  imports: [NgIf] 
})
export class QuickMessagePopupComponent {
  isOpen = signal(false);

  
  ngOnInit() {
    setTimeout(() => {
      this.isOpen.set(true); // ✅ Open popup after 5 seconds
    }, 5000);
  }

  togglePopup() {
    this.isOpen.update(v => !v);
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    this.isOpen.set(false);
  }
}
