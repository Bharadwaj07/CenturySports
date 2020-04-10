import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports-ninjas',
  templateUrl: './sports-ninjas.component.html',
  styleUrls: ['./sports-ninjas.component.scss']
})
export class SportsNinjasComponent implements OnInit {

  sportsNinjasData: any[];
  constructor() { }

  ngOnInit(): void {
    this.sportsNinjasData = [
      {
        imagePath: "assets/images/famousPersonalities/alan-smith.jpg",
        name: "Alan Smith",
        cardHeading: "The greatest PL front four ever?"
      },
      {
        imagePath: "assets/images/famousPersonalities/martin-tyler.jpg",
        name: "Martin Tyler",
        cardHeading: "Around the grounds with Tyler: Bramall Lane"
      },
      {
        imagePath: "assets/images/famousPersonalities/benedict-bermange.jpg",
        name: "Benedict Bermange",
        cardHeading: "QUIZ: Country cricket in 2019"
      }
    ]
  }

}
