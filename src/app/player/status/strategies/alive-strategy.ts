import { HumanPlayer } from '../../types/human-player';
import { StatusStrategy } from './status-strategy';

export class AliveStrategy implements StatusStrategy {
	run(gamePlayer: HumanPlayer): void {}
}
