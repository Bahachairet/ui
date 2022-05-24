import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddeditcategorieComponent } from './adminaddeditcategorie.component';

describe('AdminaddeditcategorieComponent', () => {
  let component: AdminaddeditcategorieComponent;
  let fixture: ComponentFixture<AdminaddeditcategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddeditcategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddeditcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
