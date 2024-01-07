import { GamePlayer } from '../../game-player';
import { StatusStrategy } from './status-strategy';

export class AliveStrategy implements StatusStrategy {
	run(gamePlayer: GamePlayer): void {
		const playerHandle: player = gamePlayer.getHandle();

		SetPlayerMaxHeroesAllowed(2, playerHandle);
		SetPlayerState(playerHandle, PLAYER_STATE_RESOURCE_FOOD_CAP, 5);
		SetPlayerState(playerHandle, PLAYER_STATE_GIVES_BOUNTY, 1);
	}
}
