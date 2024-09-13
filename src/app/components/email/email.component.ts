import { Component } from '@angular/core';
import { EmailService } from '../service/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  data={
    to: "",
    subject: "",
    message: ""
  }
  showSpinner=false;
  constructor(private email:EmailService, private snack:MatSnackBar) {}

  doSubmitForm() {
    console.log('Try to submit form.');
    console.log('Data: ' , this.data);
    if(this.data.to=='' || this.data.subject=='' || this.data.message=='') {
      this.snack.open('Fields cannot be empty!', "Okay");
      return;
    }
    this.showSpinner=true;
    this.email.sendEmail(this.data).subscribe(
      response => {
        this.showSpinner=false;
        console.log(response);
        this.snack.open("Email sent!", "Done");
      },
      error => {
        console.log("Error:",error);
        this.showSpinner=false;
        this.snack.open(`Error: ${error?.error?.message}`, "Okay")
      }
    )
  }
}
