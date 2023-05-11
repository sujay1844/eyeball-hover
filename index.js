let background, spongebobEye1, spongebobEye2, patrickEye1, patrickEye2;

class Eye {
	constructor(eye) {
		this.eye = eye;
		this.eyeRect = this.eye.getBoundingClientRect();
		this.eyeCentre = {
			x: this.eyeRect.left + this.eyeRect.width / 2,
			y: this.eyeRect.top + this.eyeRect.height / 2
		}
	}

	lookAt(x, y) {
		let angleInRad = Math.atan2(y - this.eyeCentre.y, x - this.eyeCentre.x);
		let angleInDeg = angleInRad * 180 / Math.PI;
		this.eye.style.transform = `rotate(${angleInDeg}deg)`;
	}
}

document.addEventListener('DOMContentLoaded', () => {
	background = document.getElementById('image');
	spongebobEye1 = new Eye(document.getElementById('spongebob-eye1'));
	spongebobEye2 = new Eye(document.getElementById('spongebob-eye2'));
	patrickEye1 = new Eye(document.getElementById('patrick-eye1'));
	patrickEye2 = new Eye(document.getElementById('patrick-eye2'));
})

document.addEventListener('mousemove', (event) => {
	let x = event.clientX;
	let y = event.clientY;
	spongebobEye1.lookAt(x, y);
	spongebobEye2.lookAt(x, y);
	patrickEye1.lookAt(x, y);
	patrickEye2.lookAt(x, y);
	
})