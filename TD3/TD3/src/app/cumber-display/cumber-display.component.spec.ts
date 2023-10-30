import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CumberDisplayComponent } from './cumber-display.component';

describe('CumberDisplayComponent', () => {
  let component: CumberDisplayComponent;
  let fixture: ComponentFixture<CumberDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CumberDisplayComponent]
    });
    fixture = TestBed.createComponent(CumberDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
