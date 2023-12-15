import { GameStateManager } from '../game-state-manager';
import { GameState } from './game-state';
import { TransitionableGameState } from './transitional-game-state';

export class InitializationState implements TransitionableGameState {
	private manager: GameStateManager;
	private nextState: GameState;

	public constructor(manager: GameStateManager) {
		this.manager = manager;
	}

	public start(): void {
		print('InitializationState started');
		//Check if teams of 2
		//If teams of team change tower ownership
		//Handle preplaced heros (maybe just not have them? this is the whole "move them to exile bs")
		//Init players
		//Fog modifiers
		//Create Tier 1 bases
		//Create Base Auras
		//If a player is not there adn its teams of 3, remove all units.
		//Set safe points for each team? tbh idk what this is - need to ask
		//Init Alliances - Create an alliance object and have list of players
		//Set research level of base armor aura and life regen to lvl 1
		//Set research levelof tower upgrade to level 1
		//Track players 13-24
		//Move camera to hero taverns
		//Anti Maphack stuff - prolly wont bother
		//Hex Color vars, doulbe check against what i have
		//Minimap correct??!??!?!? - Move camera bounds to cut off extra

		//VERSION check trigger??
		//

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
