import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectToAddDialogComponent } from './project-to-add-dialog.component';

describe('ProjectToAddDialogComponent', () => {
  let component: ProjectToAddDialogComponent;
  let fixture: ComponentFixture<ProjectToAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectToAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectToAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
