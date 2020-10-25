import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerListModalComponent } from './beer-list-modal.component';

describe('BeerListModalComponent', () => {
  let component: BeerListModalComponent;
  let fixture: ComponentFixture<BeerListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
