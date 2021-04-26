import { identifierModuleUrl, R3TargetBinder } from '@angular/compiler';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Player } from 'src/app/core/models/player.model';
import { Team } from 'src/app/core/models/team.model';

import teamNames from "../../../../assets/data/teamNames.json";

@Component({
  selector: 'team-input',
  templateUrl: './team-input.component.html',
  styleUrls: ['./team-input.component.scss']
})
export class TeamInputComponent implements OnInit{

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  maxPlayers: number = 1;
  maxTeams: number = 2;

  holdChange = false;

  _players: Player[] = [];

  _teams: Team[] = [];

  @Input()
  set players(val: Player[]) {this.inputChanged(val)};

  @Output()
  teams = new EventEmitter<string>();

  teamInputForm = this.formBuilder.group({
      teamSize: 1,
      teamCount: 2
  }, {updateOn: ''});

  ngOnInit() {
    this.onChange();
  }

  onChange(): void {
    this.teamInputForm.valueChanges.subscribe(val => {
      if (this.holdChange) return;

      if (val.teamSize == null) this.teamInputForm.patchValue({teamSize: 1});
      if (val.teamCount == null) this.teamInputForm.patchValue({teamCount: 2});

      if (val.teamSize > this.maxPlayers) this.teamInputForm.patchValue({teamSize: this.maxPlayers});
      if (val.teamCount > this.maxTeams) this.teamInputForm.patchValue({teamCount: this.maxTeams});

      let dirtyVals = this.getDirtyValues(this.teamInputForm, true);

      if (dirtyVals.teamSize != undefined) {
        this.holdChange = true;
        this.teamInputForm.patchValue({teamCount: Math.round(this._players.length/val.teamSize)});
        this.holdChange = false;
      }

      if (dirtyVals.teamCount != undefined) {
        this.holdChange = true;
        this.teamInputForm.patchValue({teamSize: Math.round(this._players.length/val.teamCount)});
        this.holdChange = false;
      }

    });
  }

  getDirtyValues(form: any, reset: boolean) {
    let dirtyValues: any = {};

    Object.keys(form.controls).forEach(key => {
      let currentControl = form.controls[key];
      if (currentControl.dirty) {
        if (currentControl.controls) {
          dirtyValues[key] = this.getDirtyValues(currentControl, reset);
        } else {
          dirtyValues[key] = currentControl.value;
        }
      }
    });

    if (reset) this.teamInputForm.markAsPristine();
    return dirtyValues;
}

  /*

    3 player = max 3 teams
    2 player per team = max = 2; round(playercnt / teamcount)

  */

  inputChanged(val: Player[]) {
    this._players = val;
    this.maxTeams = this._players.length
    this.maxPlayers = Math.round(this._players.length/2);

    this.teamInputForm.patchValue({teamSize: 1, teamCount: this.maxTeams});
  }

  distinct = (value: any, index: any, self: any) => {
    return self.indexOf(value) === index;
  }

  shuffleArray(arr: any) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  onSubmit(): void {
    let playerArr = [...this._players]
    this.shuffleArray(playerArr);

    this._teams = [];

    let tc: number = this.teamInputForm.get('teamCount')?.value;
    let ts: number = this.teamInputForm.get('teamSize')?.value;

    let tn: string[] =[];

    for (let i=0; i < tc; i++) {
      let teamName = teamNames[Math.floor(Math.random()*teamNames.length)];
      while (tn.indexOf(teamName) != -1) {
        teamName = teamNames[Math.floor(Math.random()*teamNames.length)];
      }
      tn.push(teamName);
      let color = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
      this._teams.push({id: i, name: teamName, color});
    }

    let playerIndex = 0;
    this._teams.forEach(team => {
      team.players =[];
      for (let i=0; i < ts; i++) {
        if (playerArr[playerIndex] == undefined) return;
        team.players.push(playerArr[playerIndex]);
        playerIndex++;
      }
    });
  }

}
