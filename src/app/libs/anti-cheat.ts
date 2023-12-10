export class AntiCheat {
	public static run(callback: () => void) {
		this.multiAccountCheck();
		this.mapHackCheck();

		//Run last
		callback();
	}

	private static multiAccountCheck() {}

	private static mapHackCheck() {}

	private static removePlayer(player: player) {}
}
