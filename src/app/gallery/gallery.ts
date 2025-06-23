import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
    imports: [CommonModule],
  standalone: true,
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
  selectedCategoryImages: string[] = [];
  modalOpen = false;

  categories = [
     {
      name: 'Entrance Door Design',
      cover: 'assets/entd1.jpg',
      images: [
        'assets/e1.jpg',
        'assets/e2.jpg',
        'assets/e3.jpg',
        'assets/e4.jpg',
        'assets/e5.jpg',
        'assets/e6.jpg'
      ]
    },
    
    {
      name: 'Fayor Design',
      cover: 'assets/fayor.jpg',
      images: [
        'assets/f1.jpg',
        'assets/f2.jpg',
        'assets/f3.jpg',
        'assets/f4.jpg',
        'assets/f5.jpg',
        'assets/f6.jpg'
      ]
    },
    {
      name: 'Puja Room Design',
      cover: 'assets/puja.jpg',
      images: [
        'assets/p1.jpg',
        'assets/p2.jpg',
        'assets/p3.jpg',
        'assets/p4.jpg',
        'assets/p5.jpg',
        'assets/p6.jpg'
      ]
    },
     {
      name: 'Living Room Design',
      cover: 'assets/living.jpg',
      images: [
        'assets/l1.jpg',
        'assets/l2.jpg',
        'assets/l3.jpg',
        'assets/l4.jpg',
        'assets/l5.jpg',
        'assets/l6.jpg',
         'assets/l7.jpg'
      ]
    },
       {
      name: 'Dining Room Design',
      cover: 'assets/dinning.jpg',
      images: [
        'assets/d1.jpg',
        'assets/d2.jpg',
        'assets/d3.jpg',
        'assets/d4.jpg',
        'assets/d5.jpg',
        'assets/d6.jpg',
        'assets/d7.jpg',
        'assets/d8.jpg',
        'assets/d9.jpg'
      ]
    },
       {
      name: 'Kitchen Design',
      cover: 'assets/kitchen.jpg',
      images: [
        'assets/k1.jpg',
        'assets/k2.jpg',
        'assets/k3.jpg',
        'assets/k4.jpg',
        'assets/k5.jpg',
        'assets/k6.jpg',
        'assets/k7.jpg',
        'assets/k8.jpg',
        'assets/k9.jpg'
      ]
    },
      {
      name: 'Bar Counter Design',
      cover: 'assets/bar.jpg',
      images: [
        'assets/bar1.jpg',
        'assets/bar2.jpg',
        'assets/bar3.jpg',
        'assets/bar4.jpg',
        'assets/bar5.jpg',
        'assets/bar6.jpg',
        'assets/bar7.jpg',
        'assets/bar8.jpg',
        'assets/bar9.jpg'
      ]
    },
      {
      name: 'Bed Room Design',
      cover: 'assets/bedroom.jpg',
      images: [
        'assets/b1.jpg',
        'assets/b2.jpg',
        'assets/b3.jpg',
        'assets/b4.jpg',
        'assets/b5.jpg',
        'assets/b6.jpg'
      ]
    },
       {
      name: 'Bathroom Design',
      cover: 'assets/bathroom.jpg',
      images: [
        'assets/bathroom1.jpg',
        'assets/bathroom2.jpg',
        'assets/bathroom3.jpg',
        'assets/bathroom4.jpg',
        'assets/bathroom5.jpg',
        'assets/bathroom6.jpg',
        'assets/bathroom7.jpg'
      ]
    },
          {
      name: 'Balcony Design',
      cover: 'assets/balcony.jpg',
      images: [
        'assets/balcony1.jpg',
        'assets/balcony2.jpg',
        'assets/balcony3.jpg',
        'assets/balcony4.jpg',
        'assets/balcony5.jpg',
        'assets/balcony6.jpg'
      ]
    },
  ];

  openModal(images: string[]) {
    this.selectedCategoryImages = images;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }
}
