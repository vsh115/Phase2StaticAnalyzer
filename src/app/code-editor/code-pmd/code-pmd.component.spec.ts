import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodePmdComponent } from './code-pmd.component';

describe('CodePmdComponent', () => {
  let component: CodePmdComponent;
  let fixture: ComponentFixture<CodePmdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodePmdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodePmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
