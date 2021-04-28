import { Team } from "./team.model";

export interface Player {
  id: number;
  name: string;
  team?: Team;
}
