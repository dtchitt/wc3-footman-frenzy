import { PLAYER_COLOR_MAP } from '../utils/player-colors';

export class PlayerName {
	private readonly btag: string;
	private readonly acct: string;
	private color: string;

	constructor(player: player) {
		this.btag = GetPlayerName(player);
		this.acct = this.btag.split('#')[0];
		this.setColor(player);
	}

	/**
	 * @returns The BattleTag of the player.
	 */
	public getBtag() {
		return this.btag;
	}

	/**
	 * @returns The account name of the player.
	 */
	public getAcct() {
		return this.acct;
	}

	/**
	 * @returns The color name of the player.
	 */
	public getColor() {
		return this.color;
	}

	private setColor(player: player) {
		const colorName: string = PLAYER_COLOR_MAP.get(GetPlayerColor(player));
		this.color = colorName;
	}
}
