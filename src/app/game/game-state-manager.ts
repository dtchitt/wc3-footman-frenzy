import { GameState } from './states/game-state';
import { HeroSelection } from './states/hero-selection';
import { MetaGame } from './states/meta-game';
import { ModeSelection } from './states/mode-selection';
import { PostGame } from './states/post-game';
import { PreGame } from './states/pre-game';

export class GameStateManager {
	private currentState: GameState;
	private static instance: GameStateManager;

	private constructor() {
		const modeSelection = new ModeSelection(this);
		const heroSelection = new HeroSelection(this);
		const preGame = new PreGame(this);
		const metaGame = new MetaGame(this);
		const postGame = new PostGame();

		modeSelection.setNextState(heroSelection);
		heroSelection.setNextState(preGame);
		preGame.setNextState(metaGame);
		metaGame.setNextState(postGame);

		this.currentState = modeSelection;
	}

	public static getInstance(): GameStateManager {
		if (!GameStateManager.instance) {
			GameStateManager.instance = new GameStateManager();
		}
		return GameStateManager.instance;
	}

	public startGame(): void {
		this.currentState.start();
	}

	public getCurrentState(): GameState {
		return this.currentState;
	}

	public setState(state: GameState): void {
		this.currentState = state;
		this.currentState.start();
	}
}
