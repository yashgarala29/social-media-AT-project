import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfriendComponent } from './myfriend.component';

describe('MyfriendComponent', () => {
  let component: MyfriendComponent;
  let fixture: ComponentFixture<MyfriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyfriendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
