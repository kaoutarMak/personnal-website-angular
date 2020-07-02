import { GetResumeService } from './../get-resume.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  email: string;
  object: string;
  message: string;
  showLowder: boolean = false;

  constructor(private getResumeService: GetResumeService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onClickSenMessage() {
    console.log(this.email);
    this.showLowder = true;
    this.getResumeService.postContactMe({
      email: this.email,
      suject: this.object,
      message: this.message
    }).subscribe(response => {
      this.showLowder = false;
      this.toastr.success("Your message has been sent! Thanks for contacting me 😃", "Well done!", {
        progressBar: true,
        progressAnimation: 'decreasing',
        positionClass: 'toast-bottom-right',
        timeOut: 3000
      });
    }, error => {
      this.showLowder = false;
      this.toastr.error("Oops something went wrong 🙁", "Error!", {
        progressBar: true,
        progressAnimation: 'decreasing',
        positionClass: 'toast-bottom-right',
        timeOut: 3000
      });
    });
  }


}
