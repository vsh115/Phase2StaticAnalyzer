import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSimComponent } from './code-sim.component';

describe('CodeSimComponent', () => {
  let component: CodeSimComponent;
  let fixture: ComponentFixture<CodeSimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeSimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
