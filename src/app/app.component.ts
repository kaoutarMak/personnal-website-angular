import { ResumeRootOject } from './models/resume-root-oject.model';
import { GetResumeService } from './get-resume.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-website';
  data: ResumeRootOject;
  dataLoaded: boolean = false;
  constructor(private getResumeService: GetResumeService){
    this.data = new ResumeRootOject();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getResumeService.getData()
      .subscribe((results: ResumeRootOject ) => {
        this.data = results;
        localStorage.setItem('resumeData', JSON.stringify(this.data));
        console.log(this.dataLoaded);
        this.dataLoaded = true;
        console.log(this.dataLoaded);
      });


  }
}
