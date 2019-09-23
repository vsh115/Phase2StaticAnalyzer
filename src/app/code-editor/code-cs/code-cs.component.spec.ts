import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCsComponent } from './code-cs.component';

describe('CodeCsComponent', () => {
  let component: CodeCsComponent;
  let fixture: ComponentFixture<CodeCsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeCsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
