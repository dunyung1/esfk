import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveviewingComponent } from './liveviewing.component';

describe('LiveviewingComponent', () => {
  let component: LiveviewingComponent;
  let fixture: ComponentFixture<LiveviewingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveviewingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveviewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
