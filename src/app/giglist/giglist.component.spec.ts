import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiglistComponent } from './giglist.component';

describe('GiglistComponent', () => {
  let component: GiglistComponent;
  let fixture: ComponentFixture<GiglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiglistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
