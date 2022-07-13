import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnggaranComponent } from './edit-anggaran.component';

describe('EditAnggaranComponent', () => {
  let component: EditAnggaranComponent;
  let fixture: ComponentFixture<EditAnggaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAnggaranComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAnggaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
