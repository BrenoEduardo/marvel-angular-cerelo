import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;

    // Define os valores dos inputs
    component.titleH2 = 'Título';
    component.paragraf = 'O jogo da velha da marvel consistem em 2 players';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    const element: HTMLElement = fixture.nativeElement;
    const titleElement = element.querySelector('h2');
    expect(titleElement.textContent).toContain('Título');
  });

  it('should display paragraph', () => {
    const element: HTMLElement = fixture.nativeElement;
    const paragraphElement = element.querySelector('p');
    expect(paragraphElement.textContent).toContain('O jogo da velha da marvel consistem em 2 players');
  });
});
