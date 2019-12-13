import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Users=[
    {
      id:"1",
      firstname:"Adrian",
      lastname:"Sumagang",
      email:"janaidrhean@gmail.com",
      address:"talamban",
      mobileno:"09356242787",
      department:"Pantawid Pamilya"
    },
    {
      id:"2",
      firstname:"Tanjirou",
      lastname:"Kamado",
      email:"demonslayer@gmail.com",
      address:"talamban",
      mobileno:"09356242787",
      department:"Sustainable Livelihood"
    },
    {
      id:"3",
      firstname:"Senku",
      lastname:"Chan",
      email:"doctorstone@gmail.com",
      address:"talamban",
      mobileno:"09356242787",
      department:"Social Pension"
    },
    {
      id:"4",
      firstname:"Zenitsu",
      lastname:"Sumagang",
      email:"janaidrhean@gmail.com",
      address:"talamban",
      mobileno:"09356242787",
      department:"Pantawid Pamilya"
    },
    {
      id:"5",
      firstname:"Ishigami",
      lastname:"Senku",
      email:"janaidrhean@gmail.com",
      address:"talamban",
      mobileno:"09356242787",
      department:"Pantawid Pamilya"
    },
    {
      id:"6",
      firstname:"Giyu",
      lastname:"Tomioka",
      email:"waterhashira@gmail.com",
      address:"talamban",
      mobileno:"09356242787",
      department:"Social Pension"
    }
  ]

}
