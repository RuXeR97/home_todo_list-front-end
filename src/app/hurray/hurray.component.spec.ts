import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HurrayComponent } from './hurray.component';

describe('HurrayComponent', () => {
  let component: HurrayComponent;
  let fixture: ComponentFixture<HurrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HurrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HurrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
