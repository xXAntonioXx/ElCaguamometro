import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerConverterFormComponent } from './beer-converter-form.component';

describe('BeerConverterFormComponent', () => {
  let component: BeerConverterFormComponent;
  let fixture: ComponentFixture<BeerConverterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerConverterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerConverterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
