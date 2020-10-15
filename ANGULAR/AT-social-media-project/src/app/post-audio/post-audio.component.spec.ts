import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAudioComponent } from './post-audio.component';

describe('PostAudioComponent', () => {
  let component: PostAudioComponent;
  let fixture: ComponentFixture<PostAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
