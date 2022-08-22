import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFiliereComponent } from './liste-filiere.component';

describe('ListeFiliereComponent', () => {
  let component: ListeFiliereComponent;
  let fixture: ComponentFixture<ListeFiliereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFiliereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
