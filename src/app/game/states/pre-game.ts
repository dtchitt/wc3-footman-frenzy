import { GameStateManager } from '../game-state-manager';
import { GameState } from './game-state';
import { TransitionableGameState } from './transitional-game-state';

export class PreGame implements TransitionableGameState {
	private manager: GameStateManager;
	private nextState: GameState;

	public constructor(manager: GameStateManager) {
		this.manager = manager;
	}

	public start(): void {
		print('PreGame started');

		this.end();
	}

	public end(): void {
		print('PreGame ended');

		this.manager.setState(this.nextState);
	}

	public setNextState(nextState: GameState): void {
		this.nextState = nextState;
	}
}
