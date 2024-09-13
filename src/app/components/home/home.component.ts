import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private snack: MatSnackBar) {}

  btnClick() {
    console.log('Button click');
    this.snack.open('Hey welcome to this app','Cancel');
  }

  message = 'I\'m read only!';
  canEdit = false;
 
  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else { 
      this.message = 'I\'m read only!';
    }
  }
  
  ngOnInit(): void {
    console.log('Init')
  }
}
