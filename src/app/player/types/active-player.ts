import { Status } from '../status/status';
import { GamePlayer } from './game-player';

export abstract class ActivePlayer implements GamePlayer {
	private player: player;
	private status: Status;

	constructor(player: player) {
		this.player = player;
		this.status = new Status(this);
	}

	abstract onKill(victom: player, unit: unit): void;
	abstract onDeath(killer: player, unit: unit): void;

	public getPlayer(): player {
		return this.player;
	}

	public giveGold(val?: number): void {
		// if (!val) val = this.trackedData.income.income;
		// SetPlayerState(this._player, PLAYER_STATE_RESOURCE_GOLD, GetPlayerState(this._player, PLAYER_STATE_RESOURCE_GOLD) + val);
		// if (val >= 1) this.trackedData.gold.earned += val;
		// const goldAmount: number = GetPlayerState(this._player, PLAYER_STATE_RESOURCE_GOLD);
		// if (goldAmount > this.trackedData.gold.max) {
		// 	this.trackedData.gold.max = goldAmount;
		// }
	}

	public setEndData() {
		const handle: player = this.getPlayer();

		if (handle == GetLocalPlayer()) {
			EnableSelect(false, false);
			EnableDragSelect(false, false);
		}
	}

	public getStatus(): Status {
		return this.status;
	}
}
