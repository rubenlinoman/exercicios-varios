import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionsComponent } from './operacions.component';

describe('OperacionsComponent', () => {
  let component: OperacionsComponent;
  let fixture: ComponentFixture<OperacionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperacionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperacionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
