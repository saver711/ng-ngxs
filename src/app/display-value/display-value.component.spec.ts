import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayValueComponent } from './display-value.component';

describe('DisplayValueComponent', () => {
  let component: DisplayValueComponent;
  let fixture: ComponentFixture<DisplayValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayValueComponent]
    });
    fixture = TestBed.createComponent(DisplayValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
