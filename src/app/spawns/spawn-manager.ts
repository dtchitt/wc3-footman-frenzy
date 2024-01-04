import { PersistentExpiryTimedEvent } from '../timer/persistent-expiry-timed-event';
import { TimedEvent } from '../timer/timed-event';
import { TimedEventManager } from '../timer/timed-event-manager';
import { SpawnData } from './spawn-data';

export class SpawnManager {
	private spawnData: Map<player, SpawnData>;
	private spawnEvent: Map<player, TimedEvent>;
	private eventManager: TimedEventManager;

	private static instance: SpawnManager;

	private constructor() {
		this.spawnData = new Map<player, SpawnData>();
		this.spawnEvent = new Map<player, TimedEvent>();
		this.eventManager = TimedEventManager.getInstance();
	}

	public static getInstance(): SpawnManager {
		if (SpawnManager.instance == null) {
			SpawnManager.instance = new SpawnManager();
		}

		return SpawnManager.instance;
	}

	public updateSpawnForPlayer(data: SpawnData) {
		this.removeSpawn(data.player);
		this.addSpawn(data);
	}

	private addSpawn(spawnData: SpawnData) {
		this.spawnData.set(spawnData.player, spawnData);

		const event = new PersistentExpiryTimedEvent(spawnData.interval, () => {
			this.spawnUnit(spawnData);
		});

		this.eventManager.addTimedEvent(event);
		this.spawnEvent.set(spawnData.player, event);
	}

	private removeSpawn(player: player) {
		const event = this.spawnEvent.get(player);

		if (event) {
			this.eventManager.removeTimedEvent(event);
			this.spawnEvent.delete(player);
		}

		this.spawnData.delete(player);
	}

	private spawnUnit(data: SpawnData) {
		const startLocNumber: number = GetPlayerStartLocation(data.player);

		CreateUnit(data.player, data.unit, GetStartLocationX(startLocNumber), GetStartLocationY(startLocNumber), 270.0);
	}
}
