import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeAllComponent } from './code-all.component';

describe('CodeAllComponent', () => {
  let component: CodeAllComponent;
  let fixture: ComponentFixture<CodeAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
