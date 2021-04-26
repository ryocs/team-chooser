import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerInputComponent } from './components/player-input/player-input.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TeamInputComponent } from './components/team-input/team-input.component';


@NgModule({
  declarations: [
    TranslatePipe,
    PlayerInputComponent,
    TeamInputComponent,
    PlayerListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PlayerInputComponent,
    PlayerListComponent,
    TeamInputComponent,
    TranslatePipe
  ]
})
export class SharedModule { }
