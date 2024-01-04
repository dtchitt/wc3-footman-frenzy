import { TimedEvent } from './timed-event';

export class PersistentExpiryTimedEvent extends TimedEvent {
	private initialDuration: number;

	constructor(duration: number, eventCallback: () => void) {
		super(duration, eventCallback);
		this.initialDuration = duration;
	}

	protected updateDuration(): void {
		if (this._duration > 0) {
			this._duration--;
		}
	}

	protected shouldExecute(): boolean {
		if (this.isExpired()) {
			this._duration = this.initialDuration;
			return true;
		}
		return false;
	}
}
