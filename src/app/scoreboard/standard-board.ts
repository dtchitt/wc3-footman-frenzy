import { Alliance } from '../entity/alliance/alliance';
import { HexColors } from '../utils/hex-colors';
import { Scoreboard } from './scoreboard';

export class StandardBoard extends Scoreboard {
	private teams: Alliance[];
	private readonly TEAM_COL: number = 1;
	private readonly UNIT_KILLS_COL: number = 2;
	private readonly HERO_KILLS_COL: number = 3;

	public constructor(teams: Alliance[]) {
		super();
		this.teams = teams;
		this.size = this.teams.length + 1;

		MultiboardSetColumnCount(this.board, 3);

		for (let i = 1; i <= this.size; i++) {
			MultiboardSetRowCount(this.board, MultiboardGetRowCount(this.board) + 1);
			this.setItemWidth(5.0, i, this.TEAM_COL);
			this.setItemWidth(5.0, i, this.UNIT_KILLS_COL);
			this.setItemWidth(5.0, i, this.HERO_KILLS_COL);
		}

		this.setItemValue(`${HexColors.TANGERINE}Team|r`, 1, this.TEAM_COL);
		this.setItemValue(`${HexColors.TANGERINE}Unit Kills|r`, 1, this.UNIT_KILLS_COL);
		this.setItemValue(`${HexColors.TANGERINE}Hero Kills|r`, 1, this.HERO_KILLS_COL);
		this.updateData();
		MultiboardSetItemsStyle(this.board, true, false);
		MultiboardMinimize(this.board, true);
		MultiboardMinimize(this.board, false);
		this.setVisibility(false);
	}

	/**
	 * Updates every column on the scoreboard.
	 */
	public updateData(): void {
		let row: number = 2;

		this.teams.forEach((team) => {
			this.setItemValue(`Team ${team.getNumber()}`, row, this.TEAM_COL);
			this.setItemValue(`${team.getUnitKills()}`, row, this.UNIT_KILLS_COL);
			this.setItemValue(`${team.getHeroKills()}`, row, this.HERO_KILLS_COL);

			row++;
		});
	}
}
