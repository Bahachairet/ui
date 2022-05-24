import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminshowcategorieComponent } from './adminshowcategorie.component';

describe('AdminshowcategorieComponent', () => {
  let component: AdminshowcategorieComponent;
  let fixture: ComponentFixture<AdminshowcategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminshowcategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminshowcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
