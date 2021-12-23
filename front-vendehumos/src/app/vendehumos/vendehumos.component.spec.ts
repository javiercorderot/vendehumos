import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendehumosComponent } from './vendehumos.component';

describe('VendehumosComponent', () => {
  let component: VendehumosComponent;
  let fixture: ComponentFixture<VendehumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendehumosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendehumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
