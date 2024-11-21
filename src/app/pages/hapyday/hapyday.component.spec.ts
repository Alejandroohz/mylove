import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HapydayComponent } from './hapyday.component';

describe('HapydayComponent', () => {
  let component: HapydayComponent;
  let fixture: ComponentFixture<HapydayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HapydayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HapydayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
