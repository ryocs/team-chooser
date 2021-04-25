import { Player } from "./player.model";

export class Team {
  id!: number;
  name!: string;
  players?: Player[];
}
