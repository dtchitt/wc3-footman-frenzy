// import { NamedExpiryTimedEvent } from '../timer/named-expiry-timed-event';

// interface EventFrames {
// 	nameFrame: framehandle;
// 	durationFrame: framehandle;
// }

// export class EventTrackingUI {
// 	private backdrop: framehandle;
// 	private eventFrames: Map<NamedExpiryTimedEvent, EventFrames>;

// 	constructor(events: NamedExpiryTimedEvent[]) {
// 		this.eventFrames = new Map<NamedExpiryTimedEvent, EventFrames>();

// 		const anchorFrame: framehandle = BlzGetFrameByName('MultiboardListContainer', 0);

// 		this.backdrop = BlzCreateFrame('EventTrackerBackdrop', anchorFrame, 0, 0);
// 		BlzFrameSetPoint(this.backdrop, FRAMEPOINT_TOPRIGHT, anchorFrame, FRAMEPOINT_BOTTOMRIGHT, 0.0, 0.0);
// 		BlzFrameSetSize(this.backdrop, 0.174, (events.length / 2) * 0.03 + 0.015);

// 		let yGap: number = -0.01;

// 		events.forEach((event) => {
// 			const eventTitleFrame: framehandle = BlzCreateFrame('EventTrackerTitleText', this.backdrop, 0, 0);
// 			BlzFrameSetText(eventTitleFrame, `${event.getName()}`);
// 			BlzFrameSetPoint(eventTitleFrame, FRAMEPOINT_TOPLEFT, this.backdrop, FRAMEPOINT_TOPLEFT, 0.013, yGap);

// 			const eventDurationFrame: framehandle = BlzCreateFrame('EventTrackerTimerText', this.backdrop, 0, 0);
// 			BlzFrameSetText(eventDurationFrame, `${event.getDuration()}`);
// 			BlzFrameSetPoint(eventDurationFrame, FRAMEPOINT_TOPRIGHT, this.backdrop, FRAMEPOINT_TOPRIGHT, -0.02, yGap);

// 			this.eventFrames.set(event, { nameFrame: eventTitleFrame, durationFrame: eventDurationFrame });
// 			yGap -= 0.015;
// 		});
// 	}

// 	public update() {
// 		this.eventFrames.forEach((frames, event) => {
// 			//if (event.getDuration() >= 1) {
// 			BlzFrameSetText(frames.durationFrame, `${event.getDuration()}`);
// 			//} else {
// 			//rebuild
// 			//}
// 		});
// 	}
// }
