import Player from './Player';

export default class DistanceVector {
	readonly from: Player;

	readonly to: Player;

	distance: number;

	constructor(from: Player, to: Player, distance: number) {
		this.from = from;
		this.to = to;
		this.distance = distance;
	}
}
