import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name = new FormControl();
  loginForm: FormGroup;
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      user: new FormGroup({
        userName: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      })
    });
  }

  onSubmit() {
    this.dataService.login().subscribe((res) => {
      const user = this.loginForm.value.user;
      if (user.userName === res.userName && user.password === res.password) {
        sessionStorage.setItem('Admin', 'true');
        this.router.navigate(['/news']);
      } else {
        alert('Username and password is incorrect');
      }
    });
  }
}
