import { DeathData } from './death-data';
import { KillData } from './kill-data';

export abstract class EntityData implements KillData, DeathData {
	private unitKills: number;
	private heroKills: number;
	private unitDeaths: number;
	private heroDeaths: number;

	constructor() {
		this.unitKills = 0;
		this.heroKills = 0;
		this.unitDeaths = 0;
		this.heroDeaths = 0;
	}

	public recordUnitKill(): void {
		this.unitKills++;
	}

	public getUnitKills(): number {
		return this.unitKills;
	}

	public recordHeroKill(): void {
		this.heroKills++;
	}

	public getHeroKills(): number {
		return this.heroKills;
	}

	public recordUnitDeath(): void {
		this.unitKills++;
	}

	public getUnitDeaths(): number {
		return this.unitDeaths;
	}

	public recordHeroDeath(): void {
		this.unitDeaths++;
	}

	public getHeroDeaths(): number {
		return this.heroDeaths;
	}
}
