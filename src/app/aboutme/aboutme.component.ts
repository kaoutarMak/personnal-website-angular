import { ResumeRootOject } from './../models/resume-root-oject.model';
import { Profil } from './../models/profil.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  data: any;

  constructor() { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('resumeData'));
    console.log("Aout component", this.data.resume);
  }

}
