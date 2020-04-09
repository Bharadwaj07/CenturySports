import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-famous-personalities',
  templateUrl: './famous-personalities.component.html',
  styleUrls: ['./famous-personalities.component.scss']
})
export class FamousPersonalitiesComponent implements OnInit {

  famousPersonalitiesData: any[];

  constructor() { }

  ngOnInit(): void {
    this.famousPersonalitiesData = [
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
