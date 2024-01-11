import { SPAWNED_UNITS } from './spawned-units';

export interface SpawnConfig {
	unit: number; //The raw code corresponding to the type of unit. I suggest unsing the SPAWNED_UNITS variable to handle this
	interval: number; //The time (in seconds) of the spawn cycle
	quantity: number; //The amount of units to spawn per cycle
}

export const TIER_ZERO: SpawnConfig = {
	unit: SPAWNED_UNITS.TIER_ZERO_FOOTMAN,
	interval: 5,
	quantity: 1,
};

export const TIER_ONE_HUMAN: SpawnConfig = {
	unit: SPAWNED_UNITS.TIER_ONE_RIFLEMEN,
	interval: 6,
	quantity: 1,
};
