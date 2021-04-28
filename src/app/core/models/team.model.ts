import { Player } from "./player.model";

export interface Team {
  id: number;
  name: string;
  color?: string;
  players?: Player[];
}
