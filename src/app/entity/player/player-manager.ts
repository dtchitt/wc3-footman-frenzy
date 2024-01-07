import { ALL_PLAYER_SLOTS, RemoveFogFromArea } from '../../utils/utility';
import { GamePlayer } from './game-player';

export class PlayerManager {
	private players: Map<player, GamePlayer>;

	private static instance: PlayerManager;

	private constructor() {
		this.players = new Map<player, GamePlayer>();

		for (let i = 0; i < ALL_PLAYER_SLOTS; i++) {
			const player = Player(i);

			RemoveFogFromArea(player, gg_rct_CENTER);

			if (IsPlayerObserver(player)) {
				this.processObserver(player);
			} else {
				this.processGamePlayer(player);
			}
		}
	}

	public static getInstance(): PlayerManager {
		if (PlayerManager.instance == null) {
			PlayerManager.instance = new PlayerManager();
		}

		return PlayerManager.instance;
	}

	private processGamePlayer(player: player) {
		if (IsPlayerSlotState(player, PLAYER_SLOT_STATE_PLAYING)) {
			this.players.set(player, new GamePlayer(player));
		} else {
			const towerGroup: group = GetUnitsOfPlayerAll(player);

			ForGroup(towerGroup, () => {
				const enumUnit: unit = GetEnumUnit();

				RemoveUnit(enumUnit);
			});

			DestroyGroup(towerGroup);
		}
	}

	private processObserver(player: player) {
		RemoveFogFromArea(player, gg_rct_T1_COMPLETE);
		RemoveFogFromArea(player, gg_rct_T2_COMPLETE);
		RemoveFogFromArea(player, gg_rct_T3_COMPLETE);
		RemoveFogFromArea(player, gg_rct_T4_COMPLETE);
	}

	public getPlayers(): GamePlayer[] {
		return [...this.players.values()];
	}
}
