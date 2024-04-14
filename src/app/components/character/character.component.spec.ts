import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Character } from 'src/app/core/interface/character.model';
import { CharacterComponent } from './character.component';
import { mockCharacter } from 'src/app/core/mocks/champions.mock';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    component.character = mockCharacter
    component.characterPlayerStatic = 'X';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct player', () => {
    const element: HTMLElement = fixture.nativeElement;
    const playerLabel = element.querySelector('.character-label').textContent;
    expect(playerLabel).toContain('3-D Man');
  });

  it('should display character image', () => {
    const element: HTMLElement = fixture.nativeElement;
    const characterImage = element.querySelector('img');
    expect(characterImage).toBeTruthy();
    expect(characterImage.getAttribute('src')).toContain('http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/portrait_uncanny.jpg');
  });
});
