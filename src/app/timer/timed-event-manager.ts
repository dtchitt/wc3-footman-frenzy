import { TimedEvent } from './timed-event';

export class TimedEventManager {
	private timer: timer;
	private tick: number;
	private timedEvents: Set<TimedEvent>;
	private static instance: TimedEventManager;

	private constructor() {
		this.timer = CreateTimer();
		this.tick = 1;
		this.timedEvents = new Set<TimedEvent>();

		TimerStart(this.timer, this.tick, true, () => {
			this.onTick();
		});
	}

	public static getInstance(): TimedEventManager {
		if (!TimedEventManager.instance) {
			TimedEventManager.instance = new TimedEventManager();
		}
		return TimedEventManager.instance;
	}

	public addTimedEvent(timedEvent: TimedEvent): void {
		this.timedEvents.add(timedEvent);
	}

	public removeTimedEvent(timedEvent: TimedEvent): void {
		this.timedEvents.delete(timedEvent);
	}

	private onTick(): void {
		this.timedEvents.forEach((event) => {
			if (event.tick()) {
				this.timedEvents.delete(event);
			}
		});
	}
}
