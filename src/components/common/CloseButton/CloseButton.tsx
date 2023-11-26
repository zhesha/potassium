import React, { useState } from "react";
import './CloseButton.scss'
import { Pages } from "../../../App";

interface CloseButtonProps {
    setPage (page: Pages): void
}

export function CloseButton ({ setPage }: CloseButtonProps) {
    return <div className="close-button-wrapper">
        <div className="close-button" onClick={() => setPage(Pages.game)}>
            X
        </div>
    </div>;
}