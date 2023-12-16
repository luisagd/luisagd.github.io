import React, { useEffect, useRef } from "react";

const CartesianPlane = ({ width, height, xTicks, yTicks }) => {
	const canvasRef = useRef(null);
	const scaleX = width / (xTicks.length - 1);
	const scaleY = height / (yTicks.length - 1);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");

		// Draw horizontal grid lines
		yTicks.forEach((tick, index) => {
			ctx.beginPath();
			ctx.moveTo(0, index * scaleY);
			ctx.lineTo(width, index * scaleY);
			ctx.strokeStyle = "#eee";
			ctx.stroke();
		});

		// Draw vertical grid lines
		xTicks.forEach((tick, index) => {
			ctx.beginPath();
			ctx.moveTo(index * scaleX, 0);
			ctx.lineTo(index * scaleX, height);
			ctx.strokeStyle = "#eee";
			ctx.stroke();
		});
	}, [width, height, xTicks, yTicks, scaleX, scaleY]);

	return (
		<canvas
			ref={canvasRef}
			width={width}
			height={height}
			className="border border-gray-300"
		/>
	);
};

export default CartesianPlane;
