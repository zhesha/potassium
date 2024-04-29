import React from "react";
import "./LootWindow.scss"

interface LootWindowProps {
    children: React.ReactNode,
    close (): void,
}

export function LootWindow ({ close, children }: LootWindowProps) {
    return <div className="loot-window-wrapper">
        <div className="loot-window-inner">
            <div className="loot-window-content">{children}</div>
        </div>
    </div>;
}