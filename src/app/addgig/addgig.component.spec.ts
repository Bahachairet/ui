import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgigComponent } from './addgig.component';

describe('AddgigComponent', () => {
  let component: AddgigComponent;
  let fixture: ComponentFixture<AddgigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddgigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
