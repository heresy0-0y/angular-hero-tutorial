import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdSongsComponent } from './bird-songs.component';

describe('BirdSongsComponent', () => {
  let component: BirdSongsComponent;
  let fixture: ComponentFixture<BirdSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdSongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
