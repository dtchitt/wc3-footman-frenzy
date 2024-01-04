import { EntityData } from '../data/entity-data';
import { RemoveFogFromArea } from 'src/app/utils/utility';

export class Alliance extends EntityData {
	private allianceNumber: number;
	private allianceMembers: player[];

	constructor(players: player[]) {
		super();

		this.allianceNumber = GetPlayerTeam(players[0]) + 1;
		this.allianceMembers = [];

		players.forEach((player) => {
			this.allianceMembers.push(player);

			switch (this.allianceNumber) {
				case 1:
					RemoveFogFromArea(player, gg_rct_T1_COMPLETE);
					break;
				case 2:
					RemoveFogFromArea(player, gg_rct_T2_COMPLETE);
					break;
				case 3:
					RemoveFogFromArea(player, gg_rct_T3_COMPLETE);
					break;
				case 4:
					RemoveFogFromArea(player, gg_rct_T4_COMPLETE);
					break;

				default:
					break;
			}
		});
	}

	public getMembers() {
		return this.allianceMembers;
	}

	public getNumber() {
		return this.allianceNumber;
	}
}
