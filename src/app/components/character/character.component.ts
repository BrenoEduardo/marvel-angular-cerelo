import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/core/interface/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {


  @Input() character: Character
  @Input() characterPlayerStatic: string

  constructor() { }

  ngOnInit(): void {
  }

}
