import { PlayerManager } from 'src/app/entity/player/player-manager';
import { GameStateManager } from '../game-state-manager';
import { GameState } from './game-state';
import { TransitionableGameState } from './transitional-game-state';
import { AllianceManager } from 'src/app/entity/alliance/alliance-manager';

export class InitializationState implements TransitionableGameState {
	private manager: GameStateManager;
	private nextState: GameState;

	public constructor(manager: GameStateManager) {
		this.manager = manager;
	}

	public start(): void {
		print('InitializationState started');
		PlayerManager.getInstance();
		//Init players
		//Set safe points for each team? tbh idk what this is - need to ask
		//Set research level of base armor aura and life regen to lvl 1
		//Set research levelof tower upgrade to level 1
		//Track players 13-24
		//Move camera to hero taverns
		//Anti Maphack stuff - prolly wont bother, can be done in a more simple and effective way
		//Hex Color vars, doulbe check against what i have
		//Minimap correct??!??!?!? - Move camera bounds to cut off extra terrain

		//VERSION check trigger?? Basically this seems to be for tournaments and wc3 autohosting
		//
		AllianceManager.getInstance();
		this.end();
	}

	public end(): void {
		print('InitializationState ended');

		this.manager.setState(this.nextState);
	}

	public setNextState(nextState: GameState): void {
		this.nextState = nextState;
	}
}
