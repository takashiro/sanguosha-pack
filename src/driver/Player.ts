import {
	Card,
	CardArea,
	General,
	Player as MetaPlayer,
	PlayerPhase,
	Skill,
	SkillArea,
	SkillAreaType,
} from '@karuta/sanguosha-core';

import CardOption from '../base/CardOption';
import ChooseGeneralOptions from '../base/ChooseGeneralOptions';
import PlayAction from './PlayAction';

interface Player extends MetaPlayer {
	/**
	 * @return player id
	 */
	getId(): number;

	/**
	 * @return Generals
	 */
	getGenerals(): General[];

	/**
	 * Alias of getHeadGeneral().
	 */
	getGeneral(): General | null;

	/**
	 * Alias of setHeadGeneral().
	 * @param general
	 */
	setGeneral(general: General | null): void;

	/**
	 * @return Head general
	 */
	getHeadGeneral(): General | null;

	/**
	 * Sets head general
	 * @param general
	 */
	setHeadGeneral(general: General | null): void;

	/**
	 * @return Deputy general
	 */
	getDeputyGeneral(): General | null;

	/**
	 * Sets deputy general
	 * @param general
	 */
	setDeputyGeneral(general: General): void;

	/**
	 * @return Attack range
	 */
	getAttackRange(): number;

	/**
	 * Sets attack range
	 * @param range
	 */
	setAttackRange(range: number): void;

	/**
	 * @return Round number of the current player
	 */
	getRound(): number;

	/**
	 * Sets round number
	 * @param round
	 */
	setRound(round: number): void;

	/**
	 * @return Name of the player
	 */
	getName(): string;

	/**
	 * @return Seat number of the player
	 */
	getSeat(): number;

	/**
	 * @return Skill area. Alias to getHeadSkillArea()
	 */
	getSkillArea(): SkillArea;

	/**
	 * @return Acquired skill area. Alias to getHeadAcquiredSkillArea()
	 */
	getAcquiredSkillArea(): SkillArea;

	/**
	 * @return Skill area of the head general.
	 */
	getHeadSkillArea(): SkillArea;

	/**
	 * @return Acquired skill area of the head general.
	 */
	getHeadAcquiredSkillArea(): SkillArea;

	/**
	 * @return Skill area of the deputy general.
	 */
	getDeputySkillArea(): SkillArea;

	/**
	 * @return Acquired skill area of the deputy general.
	 */
	getDeputyAcquiredSkillArea(): SkillArea;

	/**
	 * Find a skill area by its type
	 * @param type
	 */
	findSkillArea(type: SkillAreaType): SkillArea;

	/**
	 * @return All skill areas
	 */
	getSkillAreas(): SkillArea[];

	/**
	 * Judge if a skill is attached to the player.
	 * @param skill
	 * @return Whether the player has the skill
	 */
	hasSkill(skill: Skill): boolean;

	/**
	 * @return Area of hand cards
	 */
	getHandArea(): CardArea;

	/**
	 * @return Area of equips
	 */
	getEquipArea(): CardArea;

	/**
	 * @return Area of delayed tricks
	 */
	getJudgeArea(): CardArea;

	/**
	 * @return Area of card temporarily being proceeded
	 */
	getProcessArea(): CardArea;

	/**
	 * @return All card areas
	 */
	getCardAreas(): CardArea[];

	/**
	 * @return Whether the player has no card (i.e. both hand area and equip area are empty.)
	 */
	isEmpty(): boolean;

	/**
	 * Ask the player to choose a general.
	 * @param generals Candidates
	 * @return Selected general
	 */
	askForGeneral(generals: General[]): Promise<General[]>;

	/**
	 * Ask the player to choose generals.
	 * @param generals Candidates
	 * @param options Extra options
	 * @return Selected general(s)
	 */
	askForGeneral(generals: General[], options: Partial<ChooseGeneralOptions>): Promise<General[]>;

	/**
	 * Ask the player to choose card(s).
	 * @param areas
	 * @param option
	 */
	askForCards(areas: CardArea[], option: CardOption): Promise<Card[]>;

	/**
	 * Update a player property. Other players won't know the change.
	 * @param prop
	 * @param value
	 */
	updateProperty(prop: string, value: unknown): void;

	/**
	 * Broadcast a property change to the public.
	 * @param prop
	 * @param value
	 */
	broadcastProperty(prop: string, value: unknown): void;

	/**
	 * Change the use count of a card name.
	 * @param name
	 * @param delta
	 */
	addUseCount(name: string, delta: number): void;

	/**
	 * Get the use count of a card name.
	 * @param name
	 */
	getUseCount(name: string): number;

	/**
	 * Reset the use count of a card name.
	 * @param name
	 */
	resetUseCount(name: string): void;

	/**
	 * Reset all use counts.
	 */
	clearUseCount(): void;

	/**
	 * Get the use limit of a card name.
	 * @param name
	 */
	getUseLimit(name: string): number;

	/**
	 * Change the use limit of a card name.
	 * @param name
	 * @param limit
	 */
	setUseLimit(name: string, limit: number): void;

	/**
	 * Reset the use limit of a card name.
	 * @param name
	 */
	resetUseLimit(name: string): void;

	/**
	 * Reset all use limits.
	 */
	clearUseLimit(): void;

	/**
	 * Sets player phases
	 * @param phases
	 */
	setPhases(phases: PlayerPhase[]): void;

	/**
	 * @return player phases
	 */
	getPhases(): PlayerPhase[];

	/**
	 * Skil a phase.
	 * @param phase
	 */
	skipPhase(phase: PlayerPhase): boolean;

	/**
	 * Request the player to choose and invoke a skill.
	 * @param skills A list of skills
	 * @return The index of selected skill
	 */
	invokeSkill(skills: string[]): Promise<number>;

	/**
	 * Request the player to perform a play action.
	 * @param availableCards
	 */
	play(availableCards: Card[]): Promise<PlayAction | null>;

	/**
	 * Send a request to the player.
	 * @param command
	 * @param args
	 * @param timeout
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	request(command: number, args: unknown, timeout: number): Promise<any>;

	/**
	 * Send a request to the player.
	 * @param command
	 * @param args
	 * @param timeout
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	request(command: number, args: unknown): Promise<any>;

	/**
	 * Sets default request timeout.
	 * @param msecs
	 */
	setRequestTimeout(msecs: number): void;

	/**
	 * @return Default timeout of each request.
	 */
	getRequestTimeout(): number;
}

export default Player;
