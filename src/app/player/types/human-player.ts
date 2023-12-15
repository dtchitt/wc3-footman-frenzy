import { ActivePlayer } from './active-player';
import { GamePlayer } from './game-player';

export class HumanPlayer extends ActivePlayer {
	private slaves: GamePlayer[];

	constructor(player: player) {
		super(player);
		this.slaves = [];
	}

	onKill(victom: player, unit: unit): void {}

	onDeath(killer: player, unit: unit): void {}
}
