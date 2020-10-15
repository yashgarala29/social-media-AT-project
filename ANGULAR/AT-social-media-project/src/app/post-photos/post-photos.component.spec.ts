import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPhotosComponent } from './post-photos.component';

describe('PostPhotosComponent', () => {
  let component: PostPhotosComponent;
  let fixture: ComponentFixture<PostPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
