export abstract class TimedEvent {
	protected _duration: number;
	protected callback: Function;

	constructor(duration: number, eventCallback: () => void) {
		this._duration = duration;
		this.callback = eventCallback;
	}

	public tick(): boolean {
		this.updateDuration();
		if (this.shouldExecute()) {
			this.execute();
		}
		return this.isExpired();
	}

	protected abstract updateDuration(): void;

	protected abstract shouldExecute(): boolean;

	public execute(): void {
		this.callback();
	}

	protected isExpired(): boolean {
		return this._duration <= 0;
	}
}
