import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/core/interface/character.model';

@Component({
  selector: 'app-win-counters',
  templateUrl: './win-counters.component.html',
  styleUrls: ['./win-counters.component.scss']
})
export class WinCountersComponent implements OnInit {

  @Input() character: Character
  @Input() playerWin: string

  constructor() { }

  ngOnInit(): void {
  }

}
