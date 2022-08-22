import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFiliereComponent } from './show-filiere.component';

describe('ShowFiliereComponent', () => {
  let component: ShowFiliereComponent;
  let fixture: ComponentFixture<ShowFiliereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFiliereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
