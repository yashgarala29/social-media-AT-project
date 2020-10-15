import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFeiendComponent } from './find-feiend.component';

describe('FindFeiendComponent', () => {
  let component: FindFeiendComponent;
  let fixture: ComponentFixture<FindFeiendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindFeiendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindFeiendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
