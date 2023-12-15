import { ActivePlayer } from '../../types/active-player';
import { StatusStrategy } from './status-strategy';

export class AliveStrategy implements StatusStrategy {
	run(gamePlayer: ActivePlayer): void {}
}
