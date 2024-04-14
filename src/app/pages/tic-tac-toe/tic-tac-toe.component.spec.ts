import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TicTacToeComponent } from './tic-tac-toe.component';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { mockCharacter } from 'src/app/core/mocks/champions.mock';

describe('TicTacToeComponent', () => {
  let component: TicTacToeComponent;
  let fixture: ComponentFixture<TicTacToeComponent>;
  let mockActivatedRoute: any;
  let mockLocation: any;

  beforeEach(waitForAsync(() => {
    mockActivatedRoute = {
      queryParamMap: of({
        params: { champions: JSON.stringify({ leftChamp: mockCharacter, rightChamp: mockCharacter } ) }
      })
    };

    mockLocation = jasmine.createSpyObj('Location', ['back']);

    TestBed.configureTestingModule({
      declarations: [TicTacToeComponent],
      imports: [HttpClientModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Location, useValue: mockLocation }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTacToeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with game not started', () => {
    expect(component.isGameStarted).toBeTruthy();
  });

  it('should initialize with currentPlayer as X', () => {
    expect(component.currentPlayer).toEqual('X');
  });

  it('should initialize with empty board', () => {
    expect(component.board).toEqual(['', '', '', '', '', '', '', '', '']);
  });

  it('should initialize with playerWins X and O set to 0', () => {
    expect(component.playerWins).toEqual({ X: 0, O: 0 });
  });

  it('should initialize with no winner', () => {
    expect(component.winner).toBeNull();
  });

  it('should initialize with leftWins and rightWins set to 0', () => {
    expect(component.leftWins).toBe(0);
    expect(component.rightWins).toBe(0);
  });

  it('should start the game on queryParams subscription', () => {
    spyOn(component, 'randomizeStartingPlayer');
    component.getQueryParams();
    expect(component.isGameStarted).toBeTrue();
    expect(component.randomizeStartingPlayer).toHaveBeenCalled();
  });

  it('should set currentPlayer and characterPlayerStatic on randomizeStartingPlayer', () => {
    spyOn(Math, 'random').and.returnValue(0.5);
    component.randomizeStartingPlayer();
    expect(component.currentPlayer).toEqual('X');
    expect(component.characterPlayerStatic).toEqual('O');
  });

  it('should switch currentPlayer after a valid move', () => {
    component.board = ['', '', '', '', '', '', '', '', ''];
    component.makeMove(0);
    expect(component.currentPlayer).toEqual('O');
  });

  it('should not switch currentPlayer after an invalid move', () => {
    component.board = ['X', '', '', '', '', '', '', '', ''];
    component.makeMove(0);
    expect(component.currentPlayer).toEqual('X');
  });

  it('should not switch currentPlayer after a winning move', () => {
    component.board = ['X', 'X', '', '', '', '', '', '', ''];
    spyOn(component, 'checkWinner').and.returnValue('X');
    component.makeMove(2);
    expect(component.currentPlayer).toEqual('X');
  });

  it('should detect a winning condition', () => {
    component.board = ['X', 'X', 'X', '', '', '', '', '', ''];
    expect(component.checkWinner()).toEqual('X');
  });

  it('should detect a tie condition', () => {
    component.board = ['X', 'O', 'X', 'X', 'O', 'X', 'O', 'X', 'O'];
    expect(component.checkWinner()).toEqual('tie');
  });

  it('should reset the game', () => {
    component.board = ['X', 'O', 'X', 'X', 'O', 'X', 'O', 'X', 'O'];
    component.winner = 'X';
    component.playerWins = { X: 2, O: 1 };
    component.resetGame();
    expect(component.board).toEqual(['', '', '', '', '', '', '', '', '']);
    expect(component.winner).toBeNull();
    expect(component.playerWins).toEqual({ X: 2, O: 1 });
  });

  it('should go back to champions', () => {
    component.backChampions();
    expect(mockLocation.back).toHaveBeenCalled();
  });
});
