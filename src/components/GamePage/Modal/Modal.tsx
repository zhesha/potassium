import React from "react";
import "./Modal.scss"

interface ModalProps {
    children: React.ReactNode,
    close (): void,
}

export function Modal ({ close, children }: ModalProps) {
    return <div className="modal-wrapper">
        <div className="modal-inner">
            <div className="modal-content">
                <h1>{children}</h1>
            </div>
            <div className="modal-button" onClick={() => close()}>Restart</div>
        </div>
    </div>;
}