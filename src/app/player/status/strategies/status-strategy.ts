import { HumanPlayer } from '../../types/human-player';

export interface StatusStrategy {
	run: (gamePlayer: HumanPlayer) => void;
}
