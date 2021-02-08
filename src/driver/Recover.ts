import {
	Card,
	Skill,
	RecoverStruct,
} from '@karuta/sanguosha-core';

import Player from './Player';

export default class Recover {
	from?: Player;

	to: Player;

	num: number;

	skill?: Skill;

	card?: Card;

	constructor(from: Player | undefined, to: Player, num: number) {
		this.from = from;
		this.to = to;
		this.num = num;
	}

	toJSON(): RecoverStruct {
		return {
			from: this.from && this.from.getSeat(),
			to: this.to.getSeat(),
			num: this.num,
			skill: this.skill && this.skill.getName(),
			card: this.card && this.card.toJSON(),
		};
	}
}
