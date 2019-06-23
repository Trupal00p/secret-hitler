// @flow

/*::

export type Player = $ReadOnly<{|
  id: string,
  name: string,
  revealRole: boolean,
  seenRole: boolean,
  role: 'fascist' | 'liberal' | void,
  vote: 'ja' | 'nein' | void,
|}>;

export type Policy = $ReadOnly<{|
  id: string,
  type: 'fascist' | 'liberal',
  location: 'deck' | 'president' | 'chancellor' | 'enacted' | 'discard'
|}>;

export type Game = $ReadOnly<{|
  isStarted: boolean,
  isVoting: boolean,
  players: $ReadOnlyArray<Player>,
  policies: $ReadOnlyArray<Policy>,
  hitler: string | void,
  phase: $ReadOnly<{|
    name: Phase | void,
    timestamp: number
  |}>,
  presidentCandidate: string | void,
  chancellorCandidate: string | void,
  electedPresident: string | void,
  electedChancellor: string | void,
|}>;

// Round phases
export type Phase =
  | 'VIEW_ROLES'
  | 'SELECT_CHANCELLOR_CANDIDATE'
  | 'ELECTION_START'
  | 'VOTE_ON_TICKET'
  | 'REVEAL_TICKET_RESULTS'
  | 'TICKET_FAIL'
  | 'LEGISLATIVE_SESSION_START'
  | 'EXECUTION_ACTION_PHASE';

export type Message =
  | $ReadOnly<{| type: 'UPDATE_PLAYER_NAME', body: $ReadOnly<{| name: string, playerId: string |}> |}>
  | $ReadOnly<{| type: 'START_GAME' |}>
  | $ReadOnly<{| type: 'CLOCK_TICK' |}>
  | $ReadOnly<{| type: 'PLAYER_JOINED', body: $ReadOnly<{| player: Player |}> |}>
  | $ReadOnly<{| type: 'PLAYER_JOIN', body: {| playerId: string |} |}>
  | $ReadOnly<{| type: 'REVEAL_ROLE', body: {| playerId: string |} |}>
  | $ReadOnly<{| type: 'UPDATE_GAME_STATE', body: {| game: Game |} |}>
  | $ReadOnly<{| type: 'SELECT_CHANCELLOR_CANDIDATE', body: $ReadOnly<{| playerId: string |}> |}>
  | $ReadOnly<{| type: 'VOTE_ON_TICKET', body: $ReadOnly<{| playerId: string, vote: 'ja' | 'nein' |}> |}>

*/