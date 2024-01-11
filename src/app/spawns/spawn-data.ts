import { SpawnConfig } from 'src/config/unit-tiers';
import { GamePlayer } from '../entity/player/game-player';

export interface SpawnData {
	player: GamePlayer;
	x: number;
	y: number;
	config: SpawnConfig;
}
