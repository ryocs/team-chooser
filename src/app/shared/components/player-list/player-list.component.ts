import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from 'src/app/core/models/player.model';

@Component({
  selector: 'player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent {

  @Input() players?: Player[];

  @Output()
  playerDeleted = new EventEmitter<Player>();

  constructor() { }

  trackByPlayer(index: any, player: Player) {
    return player.id;
  }

  deletePlayer(player: Player) {
    let playerIndex: number = this.players!.indexOf(player);
    this.players?.splice(playerIndex, 1);
    this.playerDeleted.emit(player);
  }

}
