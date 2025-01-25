const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Sprites/CapybaraWalking.png");
ASSET_MANAGER.queueDownload("./Sprites/CapybaraSitting.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new capybaraWalking(gameEngine, 0, 0, 50))

	gameEngine.addEntity(new capybaraWalking(gameEngine, 0, 520, 100))

	gameEngine.addEntity(new capybaraWalking(gameEngine, 200, 420, 68))

	gameEngine.addEntity(new capybaraWalking(gameEngine, 0, 200, 120))

	gameEngine.addEntity(new capybaraWalking(gameEngine, 0, 300, 80))

	gameEngine.addEntity(new capybaraWalking(gameEngine, 0, 240, 200))

	gameEngine.addEntity(new capybaraWalking(gameEngine, 0, 150, 20))

	gameEngine.addEntity(new capybaraWalking(gameEngine, 0, 600, 160))

	gameEngine.addEntity(new capybaraSitting(gameEngine, 700, 300))

	gameEngine.addEntity(new capybaraSitting(gameEngine, 300, 400))

	gameEngine.addEntity(new capybaraSitting(gameEngine, 235, 280))

	gameEngine.addEntity(new capybaraSitting(gameEngine, 400, 50))

	gameEngine.addEntity(new capybaraSitting(gameEngine, 150, 50))



	gameEngine.init(ctx);

	gameEngine.start();
});
