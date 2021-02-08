import {
	Card,
	CardUseStruct,
} from '@karuta/sanguosha-core';

import Player from './Player';

class CardUse {
	from: Player;

	card: Card;

	to: Player[];

	constructor(from: Player, card: Card, to?: Player[]) {
		this.from = from;
		this.card = card;
		this.to = to || [];
	}

	toJSON(): CardUseStruct {
		return {
			from: this.from.getSeat(),
			card: this.card.toJSON(),
			to: this.to.length > 0 ? this.to.map((player) => player.getSeat()) : undefined,
		};
	}
}

export default CardUse;
