import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/core/interface/character.model';
import { routeChamp } from 'src/app/core/interface/routeChamp.model';
import { MarvelService } from 'src/app/core/services/marvel.service';

@Component({
  selector: 'app-champions-select',
  templateUrl: './champions-select.component.html',
  styleUrls: ['./champions-select.component.scss'],
})
export class ChampionsSelectComponent implements OnInit {
  public leftChampions: Character[];
  public rightChampions: Character[];
  public selectedLeftCharacter: Character;
  public selectedRightCharacter: Character;
  public showModal: boolean = false;
  public selectedSide: string;

  constructor(private marvelService: MarvelService, private router: Router) {}

  ngOnInit(): void {
    this.getAllChampions();
  }
  getAllChampions() {
    this.marvelService.getChampionsMarvel().subscribe((res: any) => {
      this.leftChampions = res.data.results.slice(0, 10);
      this.rightChampions = res.data.results.slice(10);
    });
  }
  showCharacter(champion: any, side: string): void {
    if (side === 'left') {
      this.selectedLeftCharacter = champion;
    } else if (side === 'right') {
      this.selectedRightCharacter = champion;
    }
    if (this.selectedLeftCharacter && this.selectedRightCharacter) {
      this.openConfirmationModal();
    }
  }
  filterChampions(name: string, position: string) {
    if (name) {
      this.marvelService.getEspecificChampions(name).subscribe((res: any) => {
        if (position == 'left') {
          this.leftChampions = res.data.results;
        } else {
          this.rightChampions = res.data.results;
        }
      });
    } else {
      this.getAllChampions();
    }
  }
  openConfirmationModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  confirmSelection(): void {
    this.showModal = false;
    const ticTacGame: routeChamp = {
      leftChamp: this.selectedLeftCharacter,
      rightChamp: this.selectedRightCharacter,
    };
    this.router.navigate(['letsPlay'], {
      queryParams: { champions: JSON.stringify(ticTacGame) },
    });
  }
}
