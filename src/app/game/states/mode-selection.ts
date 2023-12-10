import { GameStateManager } from '../game-state-manager';
import { GameState } from './game-state';
import { TransitionableGameState } from './transitional-game-state';

export class ModeSelection implements TransitionableGameState {
	private manager: GameStateManager;
	private nextState: GameState;

	public constructor(manager: GameStateManager) {
		this.manager = manager;
	}

	public start(): void {
		print('ModeSelection started');

		this.end();
	}

	public end(): void {
		print('ModeSelection ended');

		this.manager.setState(this.nextState);
	}

	public setNextState(nextState: GameState): void {
		this.nextState = nextState;
	}
}
