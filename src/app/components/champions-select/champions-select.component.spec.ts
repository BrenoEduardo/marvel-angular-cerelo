import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ChampionsSelectComponent } from './champions-select.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { mockCharacter } from 'src/app/core/mocks/champions.mock';

describe('ChampionsSelectComponent', () => {
  let component: ChampionsSelectComponent;
  let fixture: ComponentFixture<ChampionsSelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ ChampionsSelectComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllChampions on ngOnInit', () => {
    spyOn(component, 'getAllChampions');
    component.ngOnInit();
    expect(component.getAllChampions).toHaveBeenCalled();
  });


  it('should set selectedLeftCharacter and selectedRightCharacter on showCharacter', () => {
    const champion = mockCharacter;
    component.showCharacter(champion, 'left');
    expect(component.selectedLeftCharacter).toEqual(champion);
    component.showCharacter(champion, 'right');
    expect(component.selectedRightCharacter).toEqual(champion);
  });

  it('should open confirmation modal when both champions are selected', () => {
    const champion = mockCharacter;
    component.selectedLeftCharacter = champion;
    component.selectedRightCharacter = champion;
    component.showCharacter(champion, 'left');
    expect(component.showModal).toBeTrue();
  });

  it('should close confirmation modal on closeModal', () => {
    component.showModal = true;
    component.closeModal();
    expect(component.showModal).toBeFalse();
  });
});
