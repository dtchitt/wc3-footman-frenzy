import { PLAYER_COLOR_CODES_MAP, PLAYER_COLOR_MAP } from '../utils/player-colors';
import { IsNonEmptySubstring, PLAYERS_ALLOWED } from '../utils/utility';
import { Names } from './name-types';
import { PlayerName } from './player-name';

export class NameManager {
	private static instance: NameManager;
	private names: Map<player, PlayerName>;

	private constructor() {
		this.names = new Map<player, PlayerName>();

		for (let i = 0; i < PLAYERS_ALLOWED; i++) {
			const player: player = Player(i);

			this.names.set(player, new PlayerName(player));
		}
	}

	/**
	 * Gets the Name Manager.
	 * @returns The singleton instance.
	 */
	public static getInstance() {
		if (this.instance == null) {
			this.instance = new NameManager();
		}

		return this.instance;
	}

	/**
	 * Searches for players by a substring match of their name, color, or BattleTag.
	 * @param string - The string to search for.
	 * @returns Array of player objects that match the criteria.
	 */
	public getPlayersByAnyName(string: string): player[] {
		const foundPlayers: player[] = [];

		for (let i = 0; i < PLAYERS_ALLOWED; i++) {
			const player = Player(i);

			if (GetPlayerSlotState(player) != PLAYER_SLOT_STATE_PLAYING) continue;

			if (IsNonEmptySubstring(string, this.getColor(player))) {
				foundPlayers.push(player);
			}

			if (IsNonEmptySubstring(string, this.getBtag(player))) {
				foundPlayers.push(player);
			}
		}

		return foundPlayers;
	}

	/**
	 * Gets a player by BattleTag substring.
	 * @param string - The BattleTag substring to search for.
	 * @returns The player object if found, null otherwise.
	 */
	public getPlayerFromBtag(string: string): player | null {
		let result: player = null;

		for (let i = 0; i < PLAYERS_ALLOWED; i++) {
			const player = Player(i);

			if (GetPlayerSlotState(player) != PLAYER_SLOT_STATE_PLAYING) continue;

			if (IsNonEmptySubstring(string, this.getBtag(player))) {
				result = player;
			}
		}

		return result;
	}

	/**
	 * Sets the name of a player based on a specified type ('btag', 'acct', or 'color').
	 * @param player - The player object.
	 * @param name - The type of name to set.
	 */
	public setName(player: player, name: Names) {
		switch (name) {
			case 'btag':
				SetPlayerName(player, this.names.get(player).getBtag());
				break;

			case 'acct':
				SetPlayerName(player, this.names.get(player).getAcct());
				break;

			case 'color':
				SetPlayerName(player, this.names.get(player).getColor());
				break;

			default:
				break;
		}
	}

	/**
	 * @param player - The player object.
	 * @returns The display name of the player, including color codes.
	 */
	public getDisplayName(player: player) {
		return `${PLAYER_COLOR_CODES_MAP.get(GetPlayerColor(player))}${GetPlayerName(player)}|r`;
	}

	/**
	 * @param player - The player object.
	 * @returns The BattleTag of the player.
	 */
	public getBtag(player: player) {
		return this.names.get(player).getBtag();
	}

	/**
	 * @param player - The player object.
	 * @returns The account name of the player.
	 */
	public getAcct(player: player) {
		return this.names.get(player).getAcct();
	}

	/**
	 * @param player - The player object.
	 * @returns The color name of the player.
	 */
	public getColor(player: player) {
		return this.names.get(player).getColor();
	}
}
