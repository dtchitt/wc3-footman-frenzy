import { CameraManager } from '../camera/camera-manager';
import { ChatManager } from './chat-manager';

export function SetCommnads(chatManager: ChatManager) {
	CamCommand(chatManager);
}

function CamCommand(chatManager: ChatManager) {
	chatManager.addCmd(['-cam', '-zoom'], () => CameraManager.getInstance().update(GetTriggerPlayer()));
}

function HelpCommand(chatManager: ChatManager) {
	chatManager.addCmd(['-help', '-commands'], () => CameraManager.getInstance().update(GetTriggerPlayer()));
	//-commands SHOULD CHANGE TO HELP shows list of commands
}

function TutorialCommand(chatManager: ChatManager) {
	chatManager.addCmd(['-tutorial', '-guide', '-howto'], () => CameraManager.getInstance().update(GetTriggerPlayer()));
	//-tutorial -guide -howto
}

function InfoCommand(chatManager: ChatManager) {
	chatManager.addCmd(['-kd', '-info'], () => {
		print('TODO: Implement this command');
		//display hero kd & unit kd of each player
	});
}

function TimeCommand(chatManager: ChatManager) {
	chatManager.addCmd(['-t', '-time'], () => {
		print('TODO: Implement this command');
		//display game time
	});
}

function ForfeitCommand(chatManager: ChatManager) {
	chatManager.addCmd(['-ff', '-forfeit', '-killme'], () => {
		print('TODO: Implement this command');
		//-ff -forfeit -kill me, quit but dont leave
	});
}

function SwapCommand(chatManager: ChatManager) {
	chatManager.addCmd(['-swap'], () => {
		print('TODO: Implement this command');
		//-swap swap hero with a player SD/SR only before countdown timer ends
	});
}

function RepickCommand(chatManager: ChatManager) {
	chatManager.addCmd(['-repick'], () => {
		print('TODO: Implement this command');
		//-repick repick here AR only before countdown timer
	});
}

function PlayersCommand(chatManager: ChatManager) {
	chatManager.addCmd(['-swap'], () => {
		print('TODO: Implement this command');
		//-players show list of btags
	});
}

function PoolCommand(chatManager: ChatManager) {
	chatManager.addCmd(['-pool'], () => {
		print('TODO: Implement this command');
		//-pool automatically send gold to poolee every 2 seconds. uses dialog to pick amount use again to turn off
	});
}

//-votekick, most likely wont add
