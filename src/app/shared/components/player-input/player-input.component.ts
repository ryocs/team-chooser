import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'player-input',
  templateUrl: './player-input.component.html',
  styleUrls: ['./player-input.component.scss']
})
export class PlayerInputComponent implements OnInit {

  constructor() { }

  playerInputForm = new FormGroup({
      name:new FormControl(),
  });

  ngOnInit(): void {
  }

}
