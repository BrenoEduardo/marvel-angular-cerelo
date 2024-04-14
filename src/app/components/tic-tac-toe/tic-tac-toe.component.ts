import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/core/interface/character.model';
import { routeChamp } from 'src/app/core/interface/routeChamp.model';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
})
export class TicTacToeComponent {
  currentPlayer: 'X' | 'O' = 'X';
  characterPlayerStatic: string;
  board: string[] = Array(9).fill('');
  leftCharacter: Character;
  rightCharacter: Character;
  leftWins: number = 0;
  rightWins: number = 0;
  winner: string | null = null;
  isGameStarted: boolean = false;
  playerWins: { [key: string]: number } = { X: 0, O: 0 };

  constructor(private route: ActivatedRoute, private location: Location) {
    this.getQueryParams();
  }

  getQueryParams() {
    this.route.queryParamMap.subscribe((params: any) => {
      const champions: routeChamp = JSON.parse(params.params.champions);
      if (champions) {
        this.leftCharacter = champions.leftChamp;
        this.rightCharacter = champions.rightChamp;
        this.randomizeStartingPlayer();
        this.isGameStarted = true;
      }
    });
  }

  checkWinner(): string | null {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const condition of winConditions) {
      const [a, b, c] = condition;
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return this.board[a];
      }
    }

    if (this.board.every((cell) => cell !== '')) {
      return 'tie';
    }

    return null;
  }

  randomizeStartingPlayer() {
    const randomPlayerIndex = Math.floor(Math.random() * 2);
    this.currentPlayer = 'X';
    this.characterPlayerStatic = randomPlayerIndex === 0 ? 'X' : 'O';
  }

  makeMove(index: number): void {
    if (this.isGameStarted && !this.winner && !this.board[index]) {
      this.board[index] = this.currentPlayer;
      const winner = this.checkWinner();
      if (winner) {
        this.winner = winner;
        this.playerWins[winner]++;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  resetGame(): void {
    this.board = Array(9).fill('');
    this.winner = null;
  }

  backChampions() {
    this.location.back();
  }
}
