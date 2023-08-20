import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditorComponent } from './addeditor.component';

describe('AddeditorComponent', () => {
  let component: AddEditorComponent;
  let fixture: ComponentFixture<AddEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditorComponent]
    });
    fixture = TestBed.createComponent(AddEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
