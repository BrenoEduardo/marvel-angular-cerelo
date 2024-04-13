import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsSelectComponent } from './champions-select.component';

describe('ChampionsSelectComponent', () => {
  let component: ChampionsSelectComponent;
  let fixture: ComponentFixture<ChampionsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionsSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
