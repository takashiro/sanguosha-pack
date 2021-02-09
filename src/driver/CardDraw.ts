import { CardDrawStruct } from '@karuta/sanguosha-core';

import Player from './Player';

class CardDraw {
	player: Player;

	num: number;

	constructor(player: Player, num: number) {
		this.player = player;
		this.num = num;
	}

	toJSON(): CardDrawStruct {
		return {
			player: this.player.getSeat(),
			num: this.num,
		};
	}
}

export default CardDraw;
