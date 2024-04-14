import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() titleH2: string
  @Input() paragraf: string

  constructor() { }

  ngOnInit(): void {
  }

}
