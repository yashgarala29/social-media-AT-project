import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegistetionComponent } from './login-registetion.component';

describe('LoginRegistetionComponent', () => {
  let component: LoginRegistetionComponent;
  let fixture: ComponentFixture<LoginRegistetionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegistetionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegistetionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
