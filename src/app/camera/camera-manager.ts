import { File } from 'w3ts';
import { CamData } from './cam-data';
import { CamSettings } from './cam-settings';
import { ALL_PLAYER_SLOTS } from '../utils/utility';

export class CameraManager {
	private static instance: CameraManager;
	private pathFolderName: string = 'ffr';
	private fileName: string = 'camera.pld';
	private camData: Map<player, CamData> = new Map<player, CamData>();

	private constructor() {
		for (let i = 0; i < ALL_PLAYER_SLOTS; i++) {
			const player: player = Player(i);

			if (GetPlayerSlotState(player) != PLAYER_SLOT_STATE_EMPTY && GetPlayerController(player) == MAP_CONTROL_USER) {
				let sDist: number;
				let sAngle: number;
				let sRot: number;
				let contents: string;

				if (player == GetLocalPlayer()) {
					contents = File.read(this.getFilePath());
				}

				if (contents) {
					sDist = S2R(contents.split(' ')[0]);
					sAngle = S2R(contents.split(' ')[1]);
					sRot = S2R(contents.split(' ')[2]);
				} else {
					if (player == GetLocalPlayer()) {
						File.write(this.getFilePath(), `${CamSettings.DEFAULT_DISTANCE} ${CamSettings.DEFAULT_ANGLE} ${CamSettings.DEFAULT_ROTATION}`);
					}
				}

				this.camData.set(player, {
					distance: !sDist ? CamSettings.DEFAULT_DISTANCE : sDist,
					angle: !sAngle ? CamSettings.DEFAULT_ANGLE : sAngle,
					rotation: !sRot ? CamSettings.DEFAULT_ROTATION : sRot,
				});
			}
		}

		this.camReset();
	}

	/**
	 * Gets the Camera Manager.
	 * @returns The singleton instance.
	 */
	public static getInstance() {
		if (this.instance == null) {
			this.instance = new CameraManager();
		}
		return this.instance;
	}

	/**
	 * Updates camera settings based on player input.
	 * @param player - The player whose camera settings to update.
	 */
	public update(player: player) {
		let distance: string = GetEventPlayerChatString().split(' ')[1];
		let angle: string = GetEventPlayerChatString().split(' ')[2];
		let rotation: string = GetEventPlayerChatString().split(' ')[3];

		distance = this.isNumber(distance) ? distance : `${CamSettings.DEFAULT_DISTANCE}`;
		angle = this.isNumber(angle) ? angle : `${CamSettings.DEFAULT_ANGLE}`;
		rotation = this.isNumber(rotation) ? rotation : `${CamSettings.DEFAULT_ROTATION}`;

		this.checkCamData(this.camData.get(player), [distance, angle, rotation]);

		if (player == GetLocalPlayer()) {
			File.write(this.getFilePath(), `${distance} ${angle} ${rotation}`);
		}
	}

	/**
	 * Resets camera settings at a regular interval.
	 */
	private camReset() {
		const camTimer: timer = CreateTimer();

		TimerStart(camTimer, 0.5, true, () => {
			this.camData.forEach((data, player) => {
				if (this.camData.has(player)) this.setCameraFields(player, this.camData.get(player));
			});
		});
	}

	/**
	 * Checks and updates camera settings.
	 * @param data - The current camera settings.
	 * @param vals - The new camera settings.
	 */
	private checkCamData(data: CamData, vals: string[]) {
		if (vals[0]) this.checkDistance(data, S2R(vals[0]));
		if (vals[1]) this.checkAngle(data, S2R(vals[1]));
		if (vals[2]) this.checkRotation(data, S2R(vals[2]));
	}

	/**
	 * Validates and updates camera distance.
	 * @param data - The current camera settings.
	 * @param val - The new distance value.
	 * @returns The updated distance.
	 */
	private checkDistance(data: CamData, val: number) {
		if (val > CamSettings.MAX_DISTANCE) val = CamSettings.MAX_DISTANCE;
		if (val < CamSettings.MIN_DISTANCE) val = CamSettings.MIN_DISTANCE;

		return (data.distance = val);
	}

	/**
	 * Validates and updates camera angle.
	 * @param data - The current camera settings.
	 * @param val - The new angle value.
	 * @returns The updated angle.
	 */
	private checkAngle(data: CamData, val: number) {
		if (val > CamSettings.MAX_ANGLE) val = CamSettings.MAX_ANGLE;
		if (val < CamSettings.MIN_ANGLE) val = CamSettings.MIN_ANGLE;

		return (data.angle = val);
	}

	/**
	 * Validates and updates camera rotation.
	 * @param data - The current camera settings.
	 * @param val - The new rotation value.
	 * @returns The updated rotation.
	 */
	private checkRotation(data: CamData, val: number) {
		if (val > CamSettings.MAX_ROTATION) val = CamSettings.MAX_ROTATION;
		if (val < CamSettings.MIN_ROTATION) val = CamSettings.MIN_ROTATION;

		return (data.rotation = val);
	}

	/**
	 * Sets the camera fields based on provided settings.
	 * @param p - The player for whom to set the camera fields.
	 * @param data - The camera settings to apply.
	 */
	private setCameraFields(p: player, data: CamData) {
		SetCameraFieldForPlayer(p, CAMERA_FIELD_TARGET_DISTANCE, data.distance, 0.0);
		SetCameraFieldForPlayer(p, CAMERA_FIELD_ANGLE_OF_ATTACK, data.angle, 0.0);
		SetCameraFieldForPlayer(p, CAMERA_FIELD_ROTATION, data.rotation, 0.0);
		SetCameraFieldForPlayer(p, CAMERA_FIELD_FARZ, 10000, 0.0);
	}

	/**
	 * Checks if a string can be converted to a number.
	 * @param str - The string to check.
	 * @returns True if the string can be converted to a number, otherwise false.
	 */
	private isNumber(str: string): boolean {
		if (typeof str !== 'string') return false;
		if (str.trim() === '') return false;

		return !Number.isNaN(Number(str));
	}

	/**
	 * Gets the file path for storing camera settings.
	 * @returns The file path.
	 */
	private getFilePath(): string {
		return `${this.pathFolderName}/${this.fileName}`;
	}
}
