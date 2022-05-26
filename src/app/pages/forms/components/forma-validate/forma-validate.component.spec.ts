import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaValidateComponent } from './forma-validate.component';

describe('FormaValidateComponent', () => {
  let component: FormaValidateComponent;
  let fixture: ComponentFixture<FormaValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaValidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
