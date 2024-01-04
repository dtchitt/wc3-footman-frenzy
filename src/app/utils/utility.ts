/** The number of playable players in the game.*/
export const PLAYERS_ALLOWED: number = 12;

/** The number of player slots in the game, excluding neutral players. */
export const ALL_PLAYER_SLOTS: number = 24;

/** The direction a unit faces by default when being created. */
export const DEFAULT_FACING_VALUE: number = 270;

/** The player object for neutral hostile units. */
export const NEUTRAL_HOSTILE: player = Player(PLAYER_NEUTRAL_AGGRESSIVE);
/**
 * Checks if a string is a non-empty substring of another string. Both strings are
 * transformed to lower case and trimmed before comparison.
 * @param substring - The string to search for.
 * @param string - The string to search in.
 * @returns True if the substring is non-empty and found within the string.
 */
export function IsNonEmptySubstring(substring: string, string: string): boolean {
	substring = substring.toLowerCase().trim();
	string = string.toLowerCase().trim();

	return substring !== '' && string.includes(substring);
}

/**
 * Adds a leading zero to numbers less than 10 and returns the result as a string.
 * @param num The number to which a leading zero might be added.
 * @return The number as a string with a leading zero if it's less than 10.
 */
export function AddLeadingZero(num: number): string {
	return num < 10 ? `0${num}` : `${num}`;
}

/**
 * Computes the ratio of the dividend to the divisor and returns the result as a string with two decimal places.
 * If both the dividend and divisor are zero, returns '0.00'.
 * If only the divisor is zero, returns the dividend as a string with two decimal places.
 * If only the dividend is zero, returns the negative divisor as a string with two decimal places.
 * @param dividend The number to be divided.
 * @param divisor The number by which the dividend is divided.
 * @return The result of the division as a string with two decimal places.
 */
export function ComputeRatio(dividend: number, divisor: number): string {
	if (dividend === 0 && divisor === 0) return '0.00';
	if (divisor === 0) return dividend.toFixed(2);
	if (dividend === 0) return (-divisor).toFixed(2);

	return (dividend / divisor).toFixed(2);
}

/**
 * Removes fog for a player within a specific region.
 * @param player the player to remove fog for
 * @param rect the rect to remove the fog in
 */
export function RemoveFogFromArea(player: player, rect: rect) {
	const fogMod: fogmodifier = CreateFogModifierRect(player, FOG_OF_WAR_VISIBLE, rect, false, false);
	FogModifierStart(fogMod);
}
