import { Card } from '@karuta/sanguosha-core';

import Player from './Player';
import CardUse from './CardUse';

abstract class CardEffect {
	card: Card;

	weight: number;

	to?: Player;

	origin?: CardEffect;

	constructor(card: Card, to?: Player | CardEffect) {
		this.card = card;
		this.weight = 1;

		if (to) {
			if (to instanceof CardEffect) {
				this.origin = to;
			} else {
				this.to = to;
			}
		}
	}

	isValid(): boolean {
		return this.weight > 0;
	}

	abstract get from(): Player | undefined;

	abstract get use(): CardUse | undefined;
}

export default CardEffect;
