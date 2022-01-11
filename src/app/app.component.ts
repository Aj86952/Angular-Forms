import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { User } from './userModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'myform';

  // contact: User;
  // constructor(private contact: User) {}

  ngOnInit() {
    // this.contact = {
    //   name: 'akshay',
    //   email: 'akshay@gmail.com',
    //   gender: 'male',
    //   isMarried: true,
    //   country: 'India',
    //   address: { city: 'Nagpur', street: 'Ring road', pincode: '441100' },
    // };
  }

  submitData(data: any) {
    console.log(data);
  }
}

// export interface User {
//   name: string;
//   email: string;
//   gender: string;
//   isMarried: boolean;
//   country: string;
//   address: {
//     city: string;
//     street: string;
//     pincode: string;
//   };
// }
