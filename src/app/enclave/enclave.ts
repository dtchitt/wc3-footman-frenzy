import { BUILDING } from 'src/config/buildings';
import { DEFAULT_FACING_VALUE } from '../utils/utility';

export class Enclave {
	private owner: player;
	private bastion: unit;
	//private towers: Set<unit>;
	private baseAura: unit;

	constructor(player: player) {
		this.owner = player;
		const x: number = GetPlayerStartLocationX(player);
		const y: number = GetPlayerStartLocationY(player);

		// const towerGroup: group = GetUnitsOfPlayerAll(player);
		// this.towers = new Set<unit>();

		// ForGroup(towerGroup, () => {
		// 	const enumUnit: unit = GetEnumUnit();

		// 	if (GetUnitTypeId(enumUnit) == BUILDING.TIER_ZERO_TOWER) {
		// 		this.towers.add(enumUnit);
		// 	}
		// });

		// DestroyGroup(towerGroup);

		this.bastion = CreateUnit(player, BUILDING.TIER_ZERO_BASTION, x, y, DEFAULT_FACING_VALUE);
		this.baseAura = CreateUnit(player, BUILDING.ENCLAVE_AURA, x, y, DEFAULT_FACING_VALUE);
	}

	public getBastion(): unit {
		return this.bastion;
	}

	// public getTowers(): Set<unit> {
	// 	return this.towers;
	// }

	public getOwner(): player {
		return this.owner;
	}

	public onUpgrade(): void {
		//TODO
	}

	public onDeath(): void {
		//TODO defeat player
		//obs or remove from game?
		//send message
		//split gold between team mates?

		RemoveUnit(this.baseAura);
		//this.towers.clear();

		const group: group = CreateGroup();

		GroupEnumUnitsOfPlayer(group, this.owner);

		ForGroup(group, () => {
			RemoveUnit(GetEnumUnit());
		});
	}

	// public removeTower(unit: unit): void {
	// 	this.towers.delete(unit);
	// }
}
