import { HumanPlayer } from '../../types/human-player';
import { StatusStrategy } from './status-strategy';

export class LeftStrategy implements StatusStrategy {
	run(gamePlayer: HumanPlayer): void {}
}
