import { ActivePlayer } from '../../types/active-player';
import { StatusStrategy } from './status-strategy';

export class DeadStrategy implements StatusStrategy {
	run(gamePlayer: ActivePlayer): void {}
}
