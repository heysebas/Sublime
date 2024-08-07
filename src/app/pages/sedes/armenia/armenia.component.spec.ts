import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmeniaComponent } from './armenia.component';

describe('ArmeniaComponent', () => {
  let component: ArmeniaComponent;
  let fixture: ComponentFixture<ArmeniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmeniaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
