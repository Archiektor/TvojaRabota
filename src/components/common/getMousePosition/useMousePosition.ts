import { useState, useEffect } from "react";

export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState<{x: number | null, y: number | null}>({ x: null, y: null });

    const updateMousePosition = (ev: MouseEvent) => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    useEffect(() => {
        window.addEventListener("mousemove", (ev) => updateMousePosition(ev));

        return () => window.removeEventListener("mousemove", (ev) => updateMousePosition(ev));
    }, []);

    return mousePosition;
};
