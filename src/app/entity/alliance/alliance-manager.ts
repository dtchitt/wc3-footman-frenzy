import { PLAYERS_ALLOWED } from '../../utils/utility';
import { Alliance } from './alliance';

export class AllianceManager {
	private alliances: Map<number, Alliance>;
	private static instance: AllianceManager;

	private constructor() {
		this.alliances = new Map<number, Alliance>();
		const teams: Map<number, player[]> = new Map<number, player[]>();

		for (let i = 0; i < PLAYERS_ALLOWED; i++) {
			const player = Player(i);

			if (!IsPlayerSlotState(player, PLAYER_SLOT_STATE_PLAYING)) {
				continue;
			}

			const teamNumber = GetPlayerTeam(player) + 1;

			if (!teams.has(teamNumber)) {
				teams.set(teamNumber, [player]);
			} else {
				teams.get(teamNumber).push(player);
			}
		}

		teams.forEach((players, teamNumber) => {
			if (!this.alliances.has(teamNumber)) {
				const alliance = new Alliance(players);

				this.alliances.set(teamNumber, alliance);
			}
		});
	}

	public static getInstance(): AllianceManager {
		if (AllianceManager.instance == null) {
			this.instance = new AllianceManager();
		}

		return this.instance;
	}

	public getTeams(): Alliance[] {
		return [...this.alliances.values()];
	}
}
