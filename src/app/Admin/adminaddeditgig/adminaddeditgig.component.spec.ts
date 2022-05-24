import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddeditgigComponent } from './adminaddeditgig.component';

describe('AdminaddeditgigComponent', () => {
  let component: AdminaddeditgigComponent;
  let fixture: ComponentFixture<AdminaddeditgigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddeditgigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddeditgigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
