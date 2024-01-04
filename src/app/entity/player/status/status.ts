import { GamePlayer } from '../game-player';
import { PLAYER_STATUS } from './status-enum';
import { AliveStrategy } from './strategies/alive-strategy';
import { DeadStrategy } from './strategies/dead-strategy';
import { LeftStrategy } from './strategies/left-strategy';
import { StatusStrategy } from './strategies/status-strategy';

export class Status {
	private player: GamePlayer;
	private status: PLAYER_STATUS;

	private static readonly STRATEGY_MAP: Map<PLAYER_STATUS, StatusStrategy> = new Map([
		[PLAYER_STATUS.ALIVE, new AliveStrategy()],
		[PLAYER_STATUS.DEAD, new DeadStrategy()],
		[PLAYER_STATUS.LEFT, new LeftStrategy()],
	]);

	constructor(player: GamePlayer) {
		this.player = player;
		this.setStatus(PLAYER_STATUS.ALIVE);
	}

	public setStatus(status: PLAYER_STATUS) {
		const strategy = Status.STRATEGY_MAP.get(status);

		if (strategy) {
			strategy.run(this.player);
			this.status = status;
		} else {
			print('Unknown player status:', status);
		}
	}

	public getStatus(): string {
		return this.status;
	}

	public isAlive(): boolean {
		return this.status == PLAYER_STATUS.ALIVE;
	}

	public isDead(): boolean {
		return this.status == PLAYER_STATUS.DEAD;
	}

	public isLeft(): boolean {
		return this.status == PLAYER_STATUS.LEFT;
	}
}
