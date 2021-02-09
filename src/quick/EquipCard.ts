import { CardType as Type } from '@karuta/sanguosha-core';

import Card from '../driver/Card';
import CardUse from '../driver/CardUse';
import GameDriver from '../driver/GameDriver';
import Player from '../driver/Player';

abstract class EquipCard extends Card {
	getType(): Type {
		return Type.Equip;
	}

	async isAvailable(driver: GameDriver, source: Player): Promise<boolean> {
		return driver && source.isAlive();
	}

	async isFeasible(driver: GameDriver, selected: Player[], source: Player): Promise<boolean> {
		return driver && source && selected.length <= 0;
	}

	async filterPlayer(driver: GameDriver, selected: Player[], target: Player, source: Player): Promise<boolean> {
		return driver && selected.length <= 0 && !target && !source;
	}

	async onUse(driver: GameDriver, use: CardUse): Promise<void> {
		if (use.to.length <= 0) {
			const { from } = use;
			use.to.push(from);
		}
	}

	async use(driver: GameDriver, use: CardUse): Promise<boolean> {
		const { to } = use;
		if (!to || to.length <= 0) {
			await driver.moveCards([this], driver.getDiscardPile(), { open: true });
		} else {
			const [target] = to;
			await driver.moveCards([this], target.getEquipArea(), { open: true });
		}

		return false;
	}
}

export default EquipCard;
