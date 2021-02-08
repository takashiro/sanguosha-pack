import {
	Card,
	DamageStruct,
	DamageType,
	Skill,
} from '@karuta/sanguosha-core';

import Player from './Player';

class Damage {
	from?: Player;

	to: Player;

	num: number;

	type: DamageType;

	skill?: Skill;

	card?: Card;

	constructor(from: Player | undefined, to: Player, num: number) {
		this.from = from;
		this.to = to;
		this.num = num;
		this.type = DamageType.Normal;
	}

	toJSON(): DamageStruct {
		return {
			from: this.from ? this.from.getSeat() : undefined,
			to: this.to.getSeat(),
			num: this.num,
			type: this.type,
		};
	}
}

export default Damage;
