import { Component, OnInit } from '@angular/core';
import { DashboardCarouselData } from './dashboard-carousel-config';
import { DashboardCarousel } from './dashboard-carousel.model';

@Component({
  selector: 'app-dashboard-carousel',
  templateUrl: './dashboard-carousel.component.html',
  styleUrls: ['./dashboard-carousel.component.scss']
})
export class DashboardCarouselComponent implements OnInit {
 
  carouselConfig: DashboardCarousel[];

  constructor() { }

  ngOnInit(): void {
    this.carouselConfig = DashboardCarouselData;
  }

}
