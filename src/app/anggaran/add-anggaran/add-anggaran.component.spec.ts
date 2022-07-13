import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnggaranComponent } from './add-anggaran.component';

describe('AddAnggaranComponent', () => {
  let component: AddAnggaranComponent;
  let fixture: ComponentFixture<AddAnggaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnggaranComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAnggaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
