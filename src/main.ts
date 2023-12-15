import { W3TS_HOOK, addScriptHook } from 'w3ts/hooks';
import { GameStateManager } from './app/game/game-state-manager';
import { CameraManager } from './app/camera/camera-manager';
import { ChatManager } from './app/commands/chat-manager';
import { Quests } from './app/libs/quests';
import { NameManager } from './app/names/name-manager';
import { AntiCheat } from './app/libs/anti-cheat';
import { SetCommands } from './app/commands/commands';
import { MAP_NAME } from './app/utils/map-info';
import { TimedEventManager } from './app/timer/timed-event-manager';

function tsMain() {
	try {
		//print(`Build Version: ${MAP_VERSION}`);
		//Set up actions on game load

		const onLoadTimer: timer = CreateTimer();

		TimerStart(onLoadTimer, 0.0, false, () => {
			PauseTimer(onLoadTimer);
			DestroyTimer(onLoadTimer);
			SetGameSpeed(MAP_SPEED_NORMAL);
			SetMapFlag(MAP_LOCK_SPEED, true);
			SetMapFlag(MAP_USE_HANDICAPS, false);
			SetMapFlag(MAP_LOCK_ALLIANCE_CHANGES, true);
			// SetTimeOfDay(12.0);
			// SetTimeOfDayScale(0.0);
			FogEnable(true);
			FogMaskEnable(true);

			//Create Quests
			Quests.SetCredits();

			print('Please wait while the game initializes.');

			AntiCheat.run(() => {
				NameManager.getInstance();
				CameraManager.getInstance();
				TimedEventManager.getInstance();
				SetCommands();

				//Run last
				GameStateManager.getInstance().startGame();
			});
		});
	} catch (e) {
		print(e);
	}
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain);
addScriptHook(W3TS_HOOK.CONFIG_AFTER, () => {
	SetMapName(MAP_NAME);
});
