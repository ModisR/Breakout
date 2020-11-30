import { Brick } from "./Brick.js";

export class Level {
	constructor(rows) {
		this.bricks = [];

		this.score = 0;
		this.scoreInc = 10;

		rows.forEach((row, r) => {
			row.forEach((cell, c) => {
				if (cell)
					this.bricks.push(new Brick(
						c * Brick.W,
						r * Brick.H,
						Brick.W, Brick.H
					));
			});
		});
	}

	get unbrokenBricks() {
		return this.bricks.filter(brick => !brick.broken);
	}

	collides(ball) {
		return this.unbrokenBricks.some(brick =>
			brick.broken = brick.collides(ball)
		);
	}

	draw(ctx) {
		this.unbrokenBricks.forEach(brick => {
			brick.draw(ctx);
		});
	}
}