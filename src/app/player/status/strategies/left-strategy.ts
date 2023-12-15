import { ActivePlayer } from '../../types/active-player';
import { StatusStrategy } from './status-strategy';

export class LeftStrategy implements StatusStrategy {
	run(gamePlayer: ActivePlayer): void {}
}
