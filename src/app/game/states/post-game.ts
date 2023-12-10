import { GameState } from './game-state';

export class PostGame implements GameState {
	public constructor() {}

	public start(): void {
		print('PostGame started');

		this.end();
	}

	public end(): void {
		print('PostGame ended');
	}
}
