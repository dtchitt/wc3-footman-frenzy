export interface DeathData {
	recordUnitDeath(): void;
	getUnitDeaths(): number;
	recordHeroDeath(): void;
	getHeroDeaths(): number;
}
