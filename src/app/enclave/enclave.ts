import { BUILDING } from 'src/config/buildings';
import { DEFAULT_FACING_VALUE } from '../utils/utility';

export class Enclave {
	private bastion: unit;
	private towers: unit[];
	private baseAura: unit;

	constructor(player: player) {
		const x: number = GetPlayerStartLocationX(player);
		const y: number = GetPlayerStartLocationY(player);

		const towerGroup: group = GetUnitsOfPlayerAll(player);
		this.towers = [];

		ForGroup(towerGroup, () => {
			const enumUnit: unit = GetEnumUnit();

			if (GetUnitTypeId(enumUnit) == BUILDING.TIER_ZERO_TOWER) {
				this.towers.push(enumUnit);
			}
		});

		DestroyGroup(towerGroup);

		this.bastion = CreateUnit(player, BUILDING.TIER_ZERO_BASTION, x, y, DEFAULT_FACING_VALUE);
		this.baseAura = CreateUnit(player, BUILDING.ENCLAVE_AURA, x, y, DEFAULT_FACING_VALUE);
	}

	public getBastion(): unit {
		return this.bastion;
	}

	public getTowers(): unit[] {
		return this.towers;
	}
}
