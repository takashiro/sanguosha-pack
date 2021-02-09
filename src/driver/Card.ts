import {
	Card as MetaCard,
	CardArea,
} from '@karuta/sanguosha-core';

import GameDriver from './GameDriver';
import Player from './Player';
import CardUse from './CardUse';
import CardEffect from './CardEffect';

abstract class Card extends MetaCard {
	protected location?: CardArea;

	getLocation(): CardArea | undefined {
		return this.location;
	}

	setLocation(location: CardArea): void {
		this.location = location;
	}

	/**
	 * Check if this card can be used
	 * @param driver game driver
	 * @param source The player using this card
	 * @return Whether this card can be used
	 */
	// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
	async isAvailable(driver: GameDriver, source: Player): Promise<boolean> {
		return false;
	}

	/**
	 * Check if toSelect is a valid target
	 * @param driver game driver
	 * @param selected Selected players
	 * @param toSelect The player to be selected
	 * @param source The player selecting targets
	 * @return Whether the current player is selectable
	 */
	// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
	async filterPlayer(driver: GameDriver, selected: Player[], toSelect: Player, source: Player): Promise<boolean> {
		return !!toSelect;
	}

	/**
	 * Check if the selected players are feasible
	 * @param driver game driver
	 * @param selected Selected players
	 * @param source The user using this card
	 * @return Whether this selection is feasible
	 */
	// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
	async isFeasible(driver: GameDriver, selected: Player[], source: Player): Promise<boolean> {
		return true;
	}

	/**
	 * The first procedure of using a card
	 * @param driver
	 * @param use
	 */
	// eslint-disable-next-line no-unused-vars, no-empty-function, @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
	async onUse(driver: GameDriver, use: CardUse): Promise<void> {
	}

	/**
	 * The second procedure of using a card
	 * @param driver
	 * @param use
	 * @return Whether card effect is instant
	 */
	// eslint-disable-next-line no-unused-vars, no-empty-function, @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
	async use(driver: GameDriver, use: CardUse): Promise<boolean> {
		return true;
	}

	/**
	 * This function will be called on every target before effect()
	 * @param driver
	 * @param effect
	 */
	// eslint-disable-next-line no-unused-vars, no-empty-function, @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
	async onEffect(driver: GameDriver, effect: CardEffect): Promise<void> {
	}

	/**
	 * This function will be called on every target after use()
	 * @param driver
	 * @param effect
	 */
	// eslint-disable-next-line no-unused-vars, no-empty-function, @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
	async effect(driver: GameDriver, effect: CardEffect): Promise<void> {
	}

	/**
	 * This function will be called after effect() has been executed on every target
	 * @param driver
	 * @param use
	 */
	// eslint-disable-next-line no-unused-vars, no-empty-function, @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
	async complete(driver: GameDriver, use?: CardUse): Promise<void> {
	}
}

export default Card;
