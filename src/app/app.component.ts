import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Player } from './core/models/player.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ transform: "scale(0.0)", opacity: 0 }),
            animate('0.5s ease-out',
                    style({ transform: "scale(1.0)", opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ transform: "scale(1.0)", opacity: 1 }),
            animate('0.5s ease-in',
                    style({ transform: "scale(0.0)", opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class AppComponent {
  title = 'team-chooser';

  teamInput: boolean = false;
  playerInput: boolean = true;

  btnTag: string = "L_TEAMS_NEXT"

  players: Player[] = [];
  playerId = 0;

  playerInputChange(name: any) {
    this.playerId++;
    let player: Player = {
      id: this.playerId,
      name
    }
    this.players.push(player);
  }

  nextBtnPressed() {
    if (!this.teamInput) {
      this.btnTag = "L_BACK";
      this.playerInput = false;
      setTimeout(() => this.teamInput = true, 500);
    } else {
      this.btnTag = "L_TEAMS_NEXT";
      this.teamInput = false;
      setTimeout(() => this.playerInput = true, 500);
    }
  }

}
