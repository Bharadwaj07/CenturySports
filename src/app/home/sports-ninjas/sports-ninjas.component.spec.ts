import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsNinjasComponent } from './sports-ninjas.component';

describe('SportsNinjasComponent', () => {
  let component: SportsNinjasComponent;
  let fixture: ComponentFixture<SportsNinjasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsNinjasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsNinjasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
