import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/core/services/marvel.service';

@Component({
  selector: 'app-champions-select',
  templateUrl: './champions-select.component.html',
  styleUrls: ['./champions-select.component.scss'],
})
export class ChampionsSelectComponent implements OnInit {
  constructor(private marvelService: MarvelService) {}

  public leftChampions: any;
  public rightChampions: any;
  public selectedCharacter: any;
  public selectedLeftCharacter: any;
  public selectedRightCharacter: any;

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
}
