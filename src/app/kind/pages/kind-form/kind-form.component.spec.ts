import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KindFormComponent } from './kind-form.component';

describe('KindFormComponent', () => {
  let component: KindFormComponent;
  let fixture: ComponentFixture<KindFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KindFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KindFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
