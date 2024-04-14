import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinCountersComponent } from './win-counters.component';

describe('WinCountersComponent', () => {
  let component: WinCountersComponent;
  let fixture: ComponentFixture<WinCountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinCountersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
