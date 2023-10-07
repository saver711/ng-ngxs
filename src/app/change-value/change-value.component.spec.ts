import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeValueComponent } from './change-value.component';

describe('ChangeValueComponent', () => {
  let component: ChangeValueComponent;
  let fixture: ComponentFixture<ChangeValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeValueComponent]
    });
    fixture = TestBed.createComponent(ChangeValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
