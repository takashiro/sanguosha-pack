import {
	Card,
	CardArea,
	General,
	Skill,
	SkillAreaType,
} from '@karuta/sanguosha-core';

import CardEffect from './CardEffect';
import CardExpense from './CardExpense';
import { CardMoveOptions } from './CardMove';
import CardUse from './CardUse';
import Damage from './Damage';
import EventDriver from './EventDriver';
import Judgement from './Judgement';
import Player from './Player';
import Recover from './Recover';

interface GameDriver extends EventDriver {
	/**
	 * @return Whether the driver is running.
	 */
	isRunning(): boolean;

	/**
	 * @return Whether the driver is stopped.
	 */
	isStopped(): boolean;

	/**
	 * @return All existing players, including the alive and the dead.
	 */
	getPlayers(): Player[];

	/**
	 * Find a player by his seat number.
	 * @param seat Seat number
	 * @return Target player
	 */
	findPlayer(seat: number): Player | undefined;

	/**
	 * @return All alive players.
	 */
	getAlivePlayers(): Player[];

	/**
	 * @param except
	 * @return All alive players except one.
	 */
	getAlivePlayersExcept(except: Player): Player[];

	/**
	 * @return A list of generals from all loaded collections.
	 */
	getGenerals(): General[];

	/**
	 * Create cards from all loaded collections and add them to the draw pile.
	 * This should be called only once at the beginning.
	 */
	prepareDrawPile(): void;

	/**
	 * Fill the draw pile with all the cards in the discard pile.
	 */
	fillDrawPile(): void;

	/**
	 * Fill the draw pile with all the cards in the discard pile if there are fewer than minNum cards.
	 * @param minNum Minimum number of cards
	 */
	fillDrawPile(minNum: number): void;

	/**
	 * Get N cards from the top of the draw pile.
	 * If there is fewer than N cards, all discarded cards will be shuffled and added to the draw pile first.
	 * @param num Number of cards
	 * @return N cards
	 */
	getCardsFromDrawPile(num: number): Card[];

	/**
	 * @return The draw pile of cards
	 */
	getDrawPile(): CardArea;

	/**
	 * @return The discard pile of cards
	 */
	getDiscardPile(): CardArea;

	/**
	 * @return A virtual area to place some cards shown on the table.
	 */
	getWuguArea(): CardArea;

	/**
	 * Make a player draw some cards.
	 * @param player Target player
	 * @param num Number of cards
	 */
	drawCards(player: Player, num: number): Promise<void>;

	/**
	 * Make a player summon a card from the draw pile.
	 * @param player Target player
	 * @param cardName Name of the card
	 */
	summonCard(player: Player, cardName: string): Promise<void>;

	/**
	 * Move cards to a card area.
	 * @param cards Cards
	 * @param to Target area
	 * @param options Move options
	 */
	moveCards(cards: Card[], to: CardArea, options: CardMoveOptions): Promise<void>;

	/**
	 * Judge whether a player can use a card.
	 * @param player Target player
	 * @param card Target card
	 */
	isCardAvailable(player: Player, card: Card): Promise<boolean>;

	/**
	 * Use a card.
	 * @param use
	 */
	useCard(use: CardUse): Promise<boolean>;

	/**
	 * Use a card against a card effect.
	 * @param use
	 * @param origin
	 */
	useCard(use: CardUse, origin: CardEffect): Promise<boolean>;

	/**
	 * Expend a card without its card effect.
	 * @param expense
	 */
	expendCard(expense: CardExpense): Promise<boolean>;

	/**
	 * @return current player.
	 */
	getCurrentPlayer(): Player | null;

	/**
	 * Set current player.
	 * @param player
	 */
	setCurrentPlayer(player: Player | null): void;

	/**
	 * Sort players by action order
	 * @param players
	 */
	sortPlayersByActionOrder(players: Player[]): void;

	/**
	 * Get a player seat number relative to the current player.
	 * @param player
	 * @return Relative seat number
	 */
	getRelativeSeat(player: Player): number;

	/**
	 * Calculate the distance from a player to another.
	 * @param from
	 * @param to
	 * @return distance between the 2 players
	 */
	getDistance(from: Player, to: Player): Promise<number>;

	/**
	 * Check if a player is in one's attack range.
	 * @param source
	 * @param target
	 */
	isInAttackRange(source: Player, target: Player): Promise<boolean>;

	/**
	 * Proceed a damage event.
	 * @param damage
	 * @return Whether it takes effect.
	 */
	damage(damage: Damage): Promise<boolean>;

	/**
	 * Proceed a recover event.
	 * @param recover
	 * @return Whether it takes effect.
	 */
	recover(recover: Recover): Promise<boolean>;

	/**
	 * Proceed a judgement event.
	 * @param judgement
	 */
	judge(judgement: Judgement): Promise<void>;

	/**
	 * Add a skill to a player.
	 * The skill is dynamically acquired and put into head acquired skill area.
	 * @param player
	 * @param skill
	 * @return Whether the skill is added.
	 */
	addSkill(player: Player, skill: Skill): boolean;

	/**
	 * Add a skill to a player in the corresponding skill area.
	 * @param player
	 * @param skill
	 * @param areaType
	 * @return Whether the skill is added.
	 */
	addSkill(player: Player, skill: Skill, areaType: SkillAreaType): boolean;

	/**
	 * Remove a skill from a player.
	 * Only skills in the head acquired skill area will be removed.
	 * @param player
	 * @param skill
	 * @return Whether the skill is removed.
	 */
	removeSkill(player: Player, skill: Skill): boolean;

	/**
	 * Remove a skill from a player's specific skill area.
	 * @param player
	 * @param skill
	 * @param areaType
	 * @return Whether the skill is removed.
	 */
	removeSkill(player: Player, skill: Skill, areaType: SkillAreaType): boolean;
}

export default GameDriver;
