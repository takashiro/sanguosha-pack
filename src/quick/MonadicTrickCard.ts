import InstantTrickCard from './InstantTrickCard';
import GameDriver from '../driver/GameDriver';
import Player from '../driver/Player';

export default class MonadicTrickCard extends InstantTrickCard {
	async isFeasible(driver: GameDriver, selected: Player[], source: Player): Promise<boolean> {
		return driver && source && selected.length === 1;
	}

	async filterPlayer(driver: GameDriver, selected: Player[], target: Player, source: Player): Promise<boolean> {
		return driver && target && source && selected.length < 1;
	}
}
