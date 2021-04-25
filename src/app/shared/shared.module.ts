import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerInputComponent } from './components/player-input/player-input.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { PlayerListComponent } from './components/player-list/player-list.component';


@NgModule({
  declarations: [
    TranslatePipe,
    PlayerInputComponent,
    PlayerListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlayerInputComponent,
    PlayerListComponent,
    TranslatePipe
  ]
})
export class SharedModule { }
