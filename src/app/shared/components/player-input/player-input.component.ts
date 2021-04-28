import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'player-input',
  templateUrl: './player-input.component.html',
  styleUrls: ['./player-input.component.scss']
})
export class PlayerInputComponent implements OnInit{

  @Output()
  playerAdded = new EventEmitter<string>();

  playerInputForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.playerInputForm = this.formBuilder.group({
      name: ''
    }, {updateOn: 'submit'});
  }

  onSubmit(): void {
    let name = this.playerInputForm.get("name")?.value;
    if (name !== null && name.trim() !== "" && name.trim().length >= 3) {
      this.playerAdded.emit(name);
    }
    this.playerInputForm.reset();
  }

}
