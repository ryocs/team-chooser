import { Team } from "./team.model";

export class Player {
  id!: number;
  name!: string;
  team?: Team;
}
