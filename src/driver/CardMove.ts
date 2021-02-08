import {
	Card,
	CardArea,
	CardMoveStruct,
} from '@karuta/sanguosha-core';

import Player from './Player';

export interface CardMoveOptions {
	open?: boolean;
	openTo?: Player[];
}

export default class CardMove {
	from: CardArea;

	to: CardArea;

	cards: Card[];

	constructor(from: CardArea, to: CardArea, cards: Card[]) {
		this.from = from;
		this.to = to;
		this.cards = cards as Card[];
	}

	toJSON(open: boolean): CardMoveStruct {
		return {
			from: this.from.toJSON(),
			to: this.to.toJSON(),
			cards: open ? this.cards.map((card) => card.toJSON()) : undefined,
			cardNum: open ? undefined : this.cards.length,
		};
	}
}
