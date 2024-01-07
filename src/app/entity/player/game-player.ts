import { Enclave } from 'src/app/enclave/enclave';
import { Status } from './status/status';
import { EntityData } from '../data/entity-data';
import { SpawnManager } from 'src/app/spawns/spawn-manager';
import { SPAWNED_UNITS } from 'src/config/spawned-units';

export class GamePlayer extends EntityData {
	private player: player;
	private status: Status;
	private enclave: Enclave;
	private spawns: Set<unit>;
	private hero: unit;

	constructor(player: player) {
		super();
		this.player = player;
		this.status = new Status(this);
		this.enclave = new Enclave(player);
		this.spawns = new Set<unit>();

		const startLocNumber: number = GetPlayerStartLocation(player);

		try {
			SpawnManager.getInstance().updateSpawnForPlayer({
				player: this.player,
				interval: 6,
				unit: SPAWNED_UNITS.TIER_ZERO_FOOTMAN,
				quantity: 1,
				x: GetStartLocationX(startLocNumber),
				y: GetStartLocationY(startLocNumber),
			});
		} catch (error) {
			print(error);
		}
	}

	public getHandle(): player {
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
		const handle: player = this.getHandle();

		if (handle == GetLocalPlayer()) {
			EnableSelect(false, false);
			EnableDragSelect(false, false);
		}
	}

	public getStatus(): Status {
		return this.status;
	}

	public addSpawn(unit: unit) {
		this.spawns.add(unit);
	}

	public removeSpawn(unit: unit) {
		this.spawns.delete(unit);
	}

	public getSpawns(): Set<unit> {
		return this.spawns;
	}
}
