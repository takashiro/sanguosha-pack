import CardEffect from './CardEffect';
import CardUse from './CardUse';
import Player from './Player';

export default class InstantCardEffect extends CardEffect {
	readonly use: CardUse;

	constructor(use: CardUse, to: Player | CardEffect) {
		super(use.card, to);
		this.use = use;
	}

	get from(): Player {
		return this.use.from;
	}
}
