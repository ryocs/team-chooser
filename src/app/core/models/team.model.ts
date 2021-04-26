import { Player } from "./player.model";

export class Team {
  id!: number;
  name!: string;
  color?: string;
  players?: Player[];
}
