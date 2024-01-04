import { TimedEvent } from './timed-event';

export class ExpiryTimedEvent extends TimedEvent {
	protected updateDuration(): void {
		this._duration--;
	}

	protected shouldExecute(): boolean {
		return this.isExpired();
	}
}
