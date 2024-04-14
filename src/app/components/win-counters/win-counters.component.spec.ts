import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WinCountersComponent } from './win-counters.component';
import { mockCharacter } from 'src/app/core/mocks/champions.mock';

describe('WinCountersComponent', () => {
  let component: WinCountersComponent;
  let fixture: ComponentFixture<WinCountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WinCountersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinCountersComponent);
    component = fixture.componentInstance;

    component.character = mockCharacter
    component.playerWin = '3';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display character name', () => {
    const element: HTMLElement = fixture.nativeElement;
    const characterName = element.querySelector('.counters').textContent;
    expect(characterName).toContain('3-D Man');
  });

  it('should display player win count', () => {
    const element: HTMLElement = fixture.nativeElement;
    const winCount = element.querySelectorAll('.counters span')[1].textContent;
    expect(winCount).toContain('3');
  });
});
