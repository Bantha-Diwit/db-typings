import { Identifiable, Nameable, Orderable, PickRename } from "./utils.ts";

export type Game = Identifiable & Nameable;

export type MatchGame =
  & Identifiable
  & Orderable
  & PickRename<Match, "id", "match_id">
  & PickRename<Game, "id", "game_id">;

export type MatchTeam =
  & Identifiable
  & Orderable
  & PickRename<Match, "id", "match_id">
  & PickRename<Team, "id", "team_id">;

export type Match = Identifiable & Nameable;

export type Player =
  & Identifiable
  & Nameable
  & {
    bethesda_id: string;
    blizzard_id: string;
    discord_id: string;
    epic_id: string;
    gog_id: string;
    mojang_id: string;
    riot_id: string;
    rockstar_id: string;
    steam_id: string;
    uplay_id: string;
    xbox_id: string;
  };

export type RoundMatch =
  & Identifiable
  & Orderable
  & PickRename<Round, "id", "round_id">
  & PickRename<Match, "id", "match_id">;

export type Round =
  & Identifiable
  & Nameable
  & {
    time: string;
  };

export type TeamPlayer =
  & Identifiable
  & PickRename<Team, "id", "team_id">
  & PickRename<Player, "id", "player_id">;

export type Team =
  & Identifiable
  & Nameable
  & PickRename<Tournament, "id", "tournament_id">;

export type TournamentRound =
  & Identifiable
  & Orderable
  & PickRename<Tournament, "id", "tournament_id">
  & PickRename<Round, "id", "round_id">;

export type Tournament =
  & Identifiable
  & Nameable
  & PickRename<VideoGame, "id", "game">
  & {
    date: string;
    time: string;
  };

export type VideoGame = Identifiable & Nameable;
