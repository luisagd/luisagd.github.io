import React, { useEffect, useRef, useState } from "react";

const drawLine = (ctx, startX, startY, endX, endY, color) => {
	ctx.beginPath();
	ctx.moveTo(startX, startY);
	ctx.lineTo(endX, endY);
	ctx.strokeStyle = color;
	ctx.stroke();
};

const drawLabel = (ctx, text, x, y, color) => {
	ctx.fillStyle = color;
	ctx.fillText(text, x, y);
};
const generateLabels = (start, end, step) => {
	const labels = [];
	for (let i = start; i <= end; i += step) {
		labels.push(i);
	}
	return labels;
};
const CartesianPlane = ({ w, h }) => {
	const canvasRef = useRef(null);
	const [offset, setOffset] = useState({ x: 0, y: 0 });
	const [dragging, setDragging] = useState(false);
	const scaleX = w * 0.1;
	const scaleY = h * 0.1;
	const [dragCount, setDragCount] = useState(0); // Add this line

	const handleMouseDown = (e) => {
		setDragging(true);
	};

	const handleMouseUp = () => {
		setDragging(false);
	};

	const handleMouseMove = (e) => {
		if (dragging) {
			setOffset({ x: offset.x + e.movementX, y: offset.y + e.movementY });
			setDragCount(dragCount + 1); // Add this line
		}
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		// Clear the canvas
		ctx.clearRect(0, 0, w, h);
		const xTicks = generateLabels(
			Math.floor(offset.x / scaleX),
			Math.ceil((offset.x + w) / scaleX),
			1
		);
		const yTicks = generateLabels(
			Math.floor(offset.y / scaleY),
			Math.ceil((offset.y + h) / scaleY),
			1
		);

		// Draw horizontal grid lines and labels
		yTicks.forEach((tick, index) => {
			drawLine(
				ctx,
				0 + offset.x,
				index * scaleY + offset.y,
				w + offset.x,
				index * scaleY + offset.y,
				"#fff"
			);
			drawLabel(ctx, tick, w / 2 + offset.x, index * scaleY + offset.y, "#FFF");
		});

		// Draw vertical grid lines and labels
		yTicks.forEach((tick, index) => {
			drawLine(
				ctx,
				index * scaleX + offset.x,
				0 + offset.y,
				index * scaleX + offset.x,
				h + offset.y,
				"#fff"
			);
			drawLabel(ctx, tick, index * scaleX + offset.x, h / 2 + offset.y, "#FFF");
		});
	}, [w, h, scaleX, scaleY, offset, dragCount]);

	return (
		<canvas
			ref={canvasRef}
			width={w}
			height={h}
			className="border border-gray-300"
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onMouseMove={handleMouseMove}
		/>
	);
};

export default function Vector() {
	const xTicks = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
	const yTicks = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

	return (
		<div>
			<CartesianPlane
				width={500}
				height={500}
				xTicks={xTicks}
				yTicks={yTicks}
			/>
		</div>
	);
}
