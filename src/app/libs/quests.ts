export class Quests {
	/**
	 *	Create a Warcraft 3 quest and uses it to display credits
	 */
	public static SetCredits() {
		const credits: quest = CreateQuest();

		QuestSetIconPath(credits, 'ReplaceableTexturesWorldEditUIEditor-MultipleUnits.blp');
		QuestSetTitle(credits, 'Credits');

		let description: string = '';

		QuestSetDescription(credits, description);
		QuestSetRequired(credits, false);
		QuestSetDiscovered(credits, true);
		QuestSetCompleted(credits, false);
	}
}
