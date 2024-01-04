import { GamePlayer } from '../../game-player';
import { StatusStrategy } from './status-strategy';

export class LeftStrategy implements StatusStrategy {
	run(gamePlayer: GamePlayer): void {}
}
