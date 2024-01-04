import { Scoreboards } from 'src/app/scoreboard/scoreboards-array';
import { GameStateManager } from '../game-state-manager';
import { GameState } from './game-state';
import { TransitionableGameState } from './transitional-game-state';
import { StandardBoard } from 'src/app/scoreboard/standard-board';
import { AllianceManager } from 'src/app/entity/alliance/alliance-manager';

export class PreGame implements TransitionableGameState {
	private manager: GameStateManager;
	private nextState: GameState;

	public constructor(manager: GameStateManager) {
		this.manager = manager;
	}

	public start(): void {
		Scoreboards.push(new StandardBoard(AllianceManager.getInstance().getTeams()));
		Scoreboards[0].setVisibility(true);

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
