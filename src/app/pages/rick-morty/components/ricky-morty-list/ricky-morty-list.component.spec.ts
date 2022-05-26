import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickyMortyListComponent } from './ricky-morty-list.component';

describe('RickyMortyListComponent', () => {
  let component: RickyMortyListComponent;
  let fixture: ComponentFixture<RickyMortyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickyMortyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RickyMortyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
