import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {

  data: any;

  constructor() { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('resumeData'));
    console.log("Aout component", this.data.projects);
  }

}
