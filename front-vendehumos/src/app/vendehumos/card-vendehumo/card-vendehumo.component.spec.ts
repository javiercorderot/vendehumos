import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVendehumoComponent } from './card-vendehumo.component';

describe('CardVendehumoComponent', () => {
  let component: CardVendehumoComponent;
  let fixture: ComponentFixture<CardVendehumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVendehumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVendehumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
