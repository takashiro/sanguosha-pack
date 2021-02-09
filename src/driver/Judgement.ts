import {
	Card,
	JudgementStruct,
} from '@karuta/sanguosha-core';

import CardPattern from '../base/CardPattern';
import Player from './Player';

export default class Judgement {
	readonly player: Player;

	readonly origin: Card | string;

	readonly pattern: CardPattern;

	protected pending: boolean;

	protected effective: boolean;

	protected card?: Card;

	protected history: Card[];

	constructor(player: Player, origin: Card | string, pattern: CardPattern) {
		this.player = player;
		this.origin = origin;
		this.pattern = pattern;
		this.pending = true;
		this.effective = false;
		this.history = [];
	}

	isPending(): boolean {
		return this.pending;
	}

	isEffective(): boolean {
		return this.effective;
	}

	getCard(): Card | undefined {
		return this.card;
	}

	getHistory(): Card[] {
		return this.cards;
	}

	isExecuted(): boolean {
		return Boolean(this.card);
	}

	change(card: Card): void {
		if (this.card) {
			this.history.push(this.card);
		}
		this.card = card;
	}

	execute(): void {
		this.effective = this.card ? this.pattern.match(this.card) : false;
	}

	get cards(): Card[] {
		const cards = [...this.history];
		if (this.card) {
			cards.push(this.card);
		}
		return cards;
	}

	toJSON(): JudgementStruct {
		return {
			who: this.player.getSeat(),
			origin: typeof this.origin === 'string' ? this.origin : this.origin.toJSON(),
			pending: this.pending,
			effective: this.effective,
			card: this.card ? this.card.toJSON() : undefined,
		};
	}
}
