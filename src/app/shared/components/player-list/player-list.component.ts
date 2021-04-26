import { Component, Input } from '@angular/core';
import { Player } from 'src/app/core/models/player.model';

@Component({
  selector: 'player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent {

  @Input() players?: Player[];

  constructor() { }

  trackByFn(index: any, player: Player) {
    return player.id;
  }

}
