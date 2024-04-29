import React from "react";
import "./Modal.scss"

interface ModalProps {
    children: React.ReactNode,
    close (): void,
}

export function Modal ({ close, children }: ModalProps) {
    return <div className="modal-wrapper">
        <div className="modal-inner">
            <div className="modal-content">{children}</div>
            <div onClick={() => close()}>close</div>
        </div>
    </div>;
}