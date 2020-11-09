import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultOutputComponent } from './result-output.component';

describe('ResultOutputComponent', () => {
  let component: ResultOutputComponent;
  let fixture: ComponentFixture<ResultOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
