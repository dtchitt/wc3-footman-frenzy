export class PlayerManager {
	constructor() {
		for (let i = 0; i < 12; i++) {
			const player = Player(i);

			if (IsPlayerSlotState(player, PLAYER_SLOT_STATE_PLAYING)) {
				SetPlayerMaxHeroesAllowed(2, player);
				SetPlayerState(player, PLAYER_STATE_RESOURCE_FOOD_CAP, 5);
				SetPlayerState(player, PLAYER_STATE_GIVES_BOUNTY, 1);
			}
		}
	}
}
