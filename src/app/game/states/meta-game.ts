import { GameStateManager } from '../game-state-manager';
import { GameState } from './game-state';
import { TransitionableGameState } from './transitional-game-state';

export class MetaGame implements TransitionableGameState {
	private manager: GameStateManager;
	private nextState: GameState;

	public constructor(manager: GameStateManager) {
		this.manager = manager;
	}

	public start(): void {
		print('MetaGame started');
		this.end();
	}

	public end(): void {
		print('MetaGame ended');

		this.manager.setState(this.nextState);
	}

	public setNextState(nextState: GameState): void {
		this.nextState = nextState;
	}
}
