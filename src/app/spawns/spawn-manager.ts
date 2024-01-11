import { TimedEvent } from '../timer/timed-event';
import { TimedEventManager } from '../timer/timed-event-manager';
import { SpawnData } from './spawn-data';

export class SpawnManager {
	private spawnEvent: Map<player, TimedEvent>;
	private eventManager: TimedEventManager;

	private static instance: SpawnManager;

	private constructor() {
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
		this.removeSpawn(data.player.getHandle());
		this.addSpawn(data);
	}

	private removeSpawn(player: player) {
		const event = this.spawnEvent.get(player);

		if (event) {
			this.eventManager.removeTimedEvent(event);
			this.spawnEvent.delete(player);
		}
	}

	private addSpawn(spawnData: SpawnData) {
		const event: TimedEvent = this.eventManager.registerTimedEvent(spawnData.config.interval, () => {
			if (event.getDuration() <= 1) {
				this.spawnUnit(spawnData);
			}
		});

		this.spawnEvent.set(spawnData.player.getHandle(), event);
	}

	private spawnUnit(data: SpawnData) {
		if (GetPlayerSlotState(data.player.getHandle()) != PLAYER_SLOT_STATE_PLAYING) return;
		//TODO check if player is defeated, return if so

		for (let i = 0; i < data.config.quantity; i++) {
			const unit: unit = CreateUnit(data.player.getHandle(), data.config.unit, data.x, data.y, 270.0);
			data.player.addSpawn(unit);
		}

		this.updateSpawnForPlayer(data);
	}
}
