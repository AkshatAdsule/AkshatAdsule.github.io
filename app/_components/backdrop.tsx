"use client";

import React from "react";

type Position = [number, number];

export function Backdrop() {
    const [position, setPosition] = React.useState<Position>([0, 0]);

    const onMouseMove = (event: any) => {
        setPosition([event.pageX, event.pageY]);
    };

    React.useEffect(() => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("touchmove", onMouseMove);
        document.addEventListener("wheel", onMouseMove);
    }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 transition duration-1000 lg:absolute"
            style={{
                background: `radial-gradient(600px at ${position[0]}px ${
                    position[1]
                }px, rgba(29, 78, 216, 0.15), transparent 80%)`,
            }}
        >
        </div>
    );
}
