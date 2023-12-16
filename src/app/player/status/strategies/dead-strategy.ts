import { HumanPlayer } from '../../types/human-player';
import { StatusStrategy } from './status-strategy';

export class DeadStrategy implements StatusStrategy {
	run(gamePlayer: HumanPlayer): void {}
}
