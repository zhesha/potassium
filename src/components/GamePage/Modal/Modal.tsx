import React from "react";
import "./Modal.scss"

interface ModalProps {
    children: React.ReactNode,
    showClose?: boolean
    close? (): void,
}

export function Modal ({ close, children, showClose = true }: ModalProps) {
    return <div className="modal-wrapper">
        <div className="modal-inner">
            <div className="modal-content">
                <h1>{children}</h1>
            </div>
            {showClose && close && <div className="modal-button" onClick={() => close()}>Restart</div>}
        </div>
    </div>;
}