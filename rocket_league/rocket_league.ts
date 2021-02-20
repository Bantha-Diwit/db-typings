import { Game, Player, Team } from "../public.ts";
import { Identifiable, Nameable, PickRename } from "../utils.ts";

export type RocketLeagueGameResult =
  & Identifiable
  & PickRename<Game, "id", "game_id">
  & PickRename<Team, "id", "team_id">
  & {
    score: number;
    assists: number;
    saves: number;
    shots: number;
    goals: number;
  };

export type RocketLeaguePlayerRank =
  & PickRename<Player, "id", "player_id">
  & PickRename<RocketLeagueRank, "id", "real_rank">
  & PickRename<RocketLeagueRank, "id", "perceived_rank">;

export type RocketLeagueRank = Identifiable & Nameable;
