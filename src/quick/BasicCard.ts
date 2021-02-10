import {
	CardType as Type,
	CardSubtype as Subtype,
} from '@karuta/sanguosha-core';

import Card from '../driver/Card';
import GameDriver from '../driver/GameDriver';
import CardUse from '../driver/CardUse';

class BasicCard extends Card {
	getType(): Type {
		return Type.Basic;
	}

	getSubtype(): Subtype {
		return Subtype.None;
	}

	async use(driver: GameDriver, use: CardUse): Promise<boolean> {
		const { card } = use;
		if (!card.isReal()) {
			return true;
		}

		const processArea = use.from.getProcessArea();
		await driver.moveCards([card], processArea, { open: true });
		return true;
	}

	async complete(driver: GameDriver, use: CardUse): Promise<void> {
		if (!this.isReal()) {
			return;
		}

		const processArea = use.from.getProcessArea();
		if (processArea.has(this)) {
			const discardPile = driver.getDiscardPile();
			await driver.moveCards([this], discardPile, { open: true });
		}
	}
}

export default BasicCard;
