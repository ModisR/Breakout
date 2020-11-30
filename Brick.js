import { RectEntity } from "./RectEntity.js"


export class Brick extends RectEntity {
	static W = 80;
	static H = 20;

	constructor(x, y) {
		const hue = 360 * Math.random() | 0
		super(x, y, Brick.W, Brick.H, `hsl(${hue},100%,50%)`);

		this.broken = false;
	}

	draw(ctx){
		super.draw(ctx);
		ctx.strokeStyle = "#777";
		ctx.stroke();
	}
}