import { TimedEventManager } from 'src/app/timer/timed-event-manager';
import { GameStateManager } from '../game-state-manager';
import { GameState } from './game-state';
import { TransitionableGameState } from './transitional-game-state';
import { TimedEvent } from 'src/app/timer/timed-event';
import { PlayerManager } from 'src/app/entity/player/player-manager';

export class MetaGame implements TransitionableGameState {
	private manager: GameStateManager;
	private nextState: GameState;

	public constructor(manager: GameStateManager) {
		this.manager = manager;
	}

	public start(): void {
		print('MetaGame started');

		const massTimer: TimedEvent = TimedEventManager.getInstance().registerTimedEvent(150, () => {
			if (massTimer.getDuration() <= 0) {
				print('mass');

				PlayerManager.getInstance()
					.getPlayers()
					.forEach((player) => {
						for (let unit of player.getSpawns()) IssuePointOrder(unit, 'attack', -15, -265);
					});
			}
		});
		//this.end();
	}

	public end(): void {
		print('MetaGame ended');

		this.manager.setState(this.nextState);
	}

	public setNextState(nextState: GameState): void {
		this.nextState = nextState;
	}
}
