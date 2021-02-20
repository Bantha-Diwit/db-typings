import {
  Game,
  Match,
  MatchGame,
  MatchTeam,
  Player,
  Round,
  RoundMatch,
  Team,
  Tournament,
  TournamentRound,
} from "../public.ts";
import { PickRename } from "../utils.ts";
import { RocketLeagueGameResult, RocketLeagueRank } from "./rocket_league.ts";

export type TournamentRow =
  & PickRename<Tournament, "id", "tournament_id">
  & PickRename<Tournament, "name", "tournament_name">
  & PickRename<Tournament, "game", "tournament_game_id">
  & PickRename<Game, "name", "tournament_game_name">
  & PickRename<Tournament, "date", "tournament_date">
  & PickRename<Tournament, "time", "tournament_time">;

export type PlayerRow =
  & PickRename<Team, "id", "team_id">
  & PickRename<Team, "name", "team_name">
  & PickRename<RocketLeagueRank, "id", "team_avg_rank">
  & PickRename<RocketLeagueRank, "name", "team_avg_rank_name">
  & PickRename<Player, "id", "player_id">
  & PickRename<Player, "name", "player_name">
  & PickRename<RocketLeagueRank, "id", "player_real_rank">
  & PickRename<RocketLeagueRank, "name", "player_real_rank_name">
  & PickRename<RocketLeagueRank, "id", "player_perceived_rank">
  & PickRename<RocketLeagueRank, "name", "player_perceived_rank_name">;

export type ResultRow =
  & PickRename<Round, "id", "round_id">
  & PickRename<Round, "name", "round_name">
  & PickRename<Round, "time", "round_time">
  & PickRename<TournamentRound, "order", "round_order">
  & PickRename<Match, "id", "match_id">
  & PickRename<Match, "name", "match_name">
  & PickRename<RoundMatch, "order", "match_order">
  & PickRename<Game, "id", "game_id">
  & PickRename<Game, "name", "game_name">
  & PickRename<MatchGame, "order", "game_order">
  & PickRename<Team, "id", "team_id">
  & PickRename<Team, "name", "team_name">
  & PickRename<MatchTeam, "order", "team_order">
  & PickRename<RocketLeagueGameResult, "score", "result_score">
  & PickRename<RocketLeagueGameResult, "assists", "result_assists">
  & PickRename<RocketLeagueGameResult, "saves", "result_saves">
  & PickRename<RocketLeagueGameResult, "shots", "result_shots">
  & PickRename<RocketLeagueGameResult, "goals", "result_goals">;
