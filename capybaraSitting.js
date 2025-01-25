class capybaraSitting {
    constructor(game , x, y) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/CapybaraSitting.png"),
            0, 0, 64, 56, 8, 0.125);
        this.speed = 50;
        this.x = x;
        this.y = y;
    };

    update() {
        // this.x += this.speed * this.game.clockTick;
        // if  (this.x >  1024) this.x = 0;

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);

    };
}