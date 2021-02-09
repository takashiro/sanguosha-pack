import {
	CardSubtype as Subtype,
} from '@karuta/sanguosha-core';

import TrickCard from './TrickCard';
import GameDriver from '../driver/GameDriver';
import CardUse from '../driver/CardUse';
import Player from '../driver/Player';

class DelayedTrickCard extends TrickCard {
	getSubtype(): Subtype {
		return Subtype.DelayedTrick;
	}

	async isFeasible(driver: GameDriver, selected: Player[], source: Player): Promise<boolean> {
		return driver && selected.length === 1 && selected[0] !== source;
	}

	async filterPlayer(driver: GameDriver, selected: Player[], target: Player, source: Player): Promise<boolean> {
		if (selected.length > 0 || target === source) {
			return false;
		}

		const area = target.getJudgeArea();
		return !area.find((card) => card.getName() === this.getName());
	}

	async isAvailable(driver: GameDriver, source: Player): Promise<boolean> {
		const players = driver.getAlivePlayersExcept(source);
		for (const player of players) {
			const area = player.getJudgeArea();
			if (!area.find((card) => card.getName() === this.getName())) {
				return true;
			}
		}
		return false;
	}

	async use(driver: GameDriver, use: CardUse): Promise<boolean> {
		const { to } = use;
		if (!to || to.length <= 0) {
			await driver.moveCards([this], driver.getDiscardPile(), { open: true });
		} else {
			const [target] = to;
			await driver.moveCards([this], target.getJudgeArea(), { open: true });
		}
		return false;
	}
}

export default DelayedTrickCard;
