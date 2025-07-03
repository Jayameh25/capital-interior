import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, FooterComponent],
  template: `
    <!-- Hero Section Wrapper -->
    <div style="position: relative;">

      <!-- Floating Navbar on Top of Carousel -->
      <nav
        class="navbar navbar-expand-lg navbar-dark "
        style="position: absolute; top: 0; left: 0; width: 100%; z-index: 10; background-color: rgba(0, 0, 0, 0);"
      >
        <div class="container">
          <a class="navbar-brand" routerLink="/">
            <img src="assets/logo.jpg" alt="Interior Design Logo" height="60" width="180">
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a
                  class="nav-link"
                  routerLink="/"
                  style="color: black; font-weight: 500; font-size: 1.6rem;"
                 
                >Home</a>
              </li> 
              <li class="nav-item">
                <a
                  class="nav-link"
                  routerLink="/gallery"
                  style="color: black; font-weight: 500; font-size: 1.6rem;"
             
                >E-Catalogue </a>
              </li>
               <li class="nav-item">
                <a class="nav-link" routerLink="/what-we-do"
                style="color: black; font-weight: 500; font-size: 1.6rem;"
                >About Us</a>
              </li>
               <li class="nav-item">
                <a class="nav-link" routerLink="/services"
                style="color: black; font-weight: 500; font-size: 1.6rem;"
                >Services</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  routerLink="/contact"
                  style="color: black; font-weight: 500; font-size: 1.6rem;"
                 
                >Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Carousel -->
      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="assets/4.jpg"
              class="d-block w-100"
              style="height: 170vh; object-fit: cover;"
              alt="Interior 1"
            >
          </div>
          <div class="carousel-item">
            <img
              src="assets/2.png"
              class="d-block w-100"
              style="height: 140vh; object-fit: cover;"
              alt="Interior 2"
            >
          </div>
          <div class="carousel-item">
            <img
              src="assets/4.png"
              class="d-block w-100"
              style="height: 140vh; object-fit: cover;"
              alt="Interior 3"
            >
          </div>
          <div class="carousel-item">
            <img
              src="assets/3.jpg"
              class="d-block w-100"
              style="height: 140vh; object-fit: cover;"
              alt="Interior 4"
            >
          </div>
           <div class="carousel-item">
            <img
              src="assets/kitchena.jpg"
              class="d-block w-100"
              style="height: 140vh; object-fit: cover;"
              alt="Interior 5"
            >
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>



    <!-- Main Content -->
    <div class="container mt-4">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
    <!-- WhatsApp Chat Button -->
    <a href="https://wa.me/919650873566" class="whatsapp-float" target="_blank" aria-label="Chat on WhatsApp">
      <img src="assets/whatsapp-icon.jpg" alt="WhatsApp" />
      <span class="qlwapp-text">How can I help you?</span>
    </a>

  `

})
export class AppComponent {
}
