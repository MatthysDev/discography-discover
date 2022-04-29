import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskFormComponent } from './disk-form.component';

describe('DiskFormComponent', () => {
  let component: DiskFormComponent;
  let fixture: ComponentFixture<DiskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiskFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
