"use client";

import React from "react";

type Position = [number, number];

export function Backdrop() {
	const [position, setPosition] = React.useState<Position>([0, 0]);
	const lastMousePos = React.useRef<Position>([0, 0]);

	const updatePosition = () => {
		// Use last known mouse position relative to viewport, no scroll offset needed for fixed element
		setPosition(lastMousePos.current);
	};

	const onMouseMove = (event: MouseEvent) => {
		lastMousePos.current = [event.clientX, event.clientY];
		updatePosition();
	};

	const onScroll = () => {
		updatePosition();
	};

	React.useEffect(() => {
		document.addEventListener("mousemove", onMouseMove);
		window.addEventListener("scroll", onScroll);
		return () => {
			document.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<div
			className="pointer-events-none fixed inset-0 z-30 transition duration-1000"
			style={{
				background: `radial-gradient(600px at ${position[0]}px ${
					position[1]
				}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
			}}
		></div>
	);
}
