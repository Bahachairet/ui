import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminshowgigComponent } from './adminshowgig.component';

describe('AdminshowgigComponent', () => {
  let component: AdminshowgigComponent;
  let fixture: ComponentFixture<AdminshowgigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminshowgigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminshowgigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
