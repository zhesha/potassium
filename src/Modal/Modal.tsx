import React from "react";
import "./Modal.scss"

interface ModalProps {
    message: string,
    close (): void,
}

export function Modal ({ close, message }: ModalProps) {
    return <div className="modal-wrapper">
        <div className="modal-inner">
            <div className="modal-content">{message}</div>
            <div onClick={() => close()}>close</div>
        </div>
    </div>;
}