import { PlayerPhase } from '@karuta/sanguosha-core';
import Player from './Player';

class PhaseChange {
	player: Player;

	from: PlayerPhase;

	to: PlayerPhase;

	constructor(player: Player, from: PlayerPhase, to: PlayerPhase) {
		this.player = player;
		this.from = from;
		this.to = to;
	}
}

export default PhaseChange;
