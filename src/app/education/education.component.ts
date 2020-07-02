import { Training } from './../models/training.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  data: any;

  constructor() { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('resumeData'));
    console.log("Aout component", this.data.trainings);
  }


}
