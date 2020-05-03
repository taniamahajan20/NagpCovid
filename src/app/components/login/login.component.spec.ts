import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DataService } from 'src/app/services/data-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [LoginComponent],
      providers: [DataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have login form', () => {
    expect(component.loginForm).toBeDefined();
  });
  it('should route to news', () => {
    component.loginForm.value.user = {
      userName: 'Admin',
      password: 'Admin@123'
    };
    const dataservice = TestBed.inject(DataService);
    spyOn(dataservice, 'login').and.callFake(() => {
      return of({
        userName: 'Admin',
        password: 'Admin@123'
      });
    });
    spyOn(router, 'navigate');
    component.onSubmit();
    expect(dataservice.login).toHaveBeenCalled();
    expect(sessionStorage.getItem('Admin')).toBe('true');
    expect(router.navigate).toHaveBeenCalledWith(['/news']);
  });
  it('should show not route to news', () => {
    sessionStorage.removeItem('Admin');
    component.loginForm.value.user = {
      userName: 'q',
      password: 'a@123'
    };
    const dataservice = TestBed.inject(DataService);
    spyOn(dataservice, 'login').and.callFake(() => {
      return of({
        userName: 'Admin',
        password: 'Admin@123'
      });
    });
    spyOn(router, 'navigate');
    component.onSubmit();
    expect(dataservice.login).toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
  });
});
