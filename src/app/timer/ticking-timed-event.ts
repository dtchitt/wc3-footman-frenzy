import { TimedEvent } from './timed-event';

export class TickingTimedEvent extends TimedEvent {
	protected updateDuration(): void {
		this._duration--;
	}

	protected shouldExecute(): boolean {
		return true;
	}
}
