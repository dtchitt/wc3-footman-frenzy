import { GameState } from './game-state';

export interface TransitionableGameState extends GameState {
	setNextState(nextState: GameState): void;
}
