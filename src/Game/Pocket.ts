import { InventoryItem } from "./Inventory"

export interface Pocket {
    getList (): Array<InventoryItem>
    changeHandler (): void
    onChange (handler: () => void): void
}

export function createPocket (): Pocket {
    return {
        getList () {
            return [];
        },
        changeHandler: () => {},
        onChange (handler: () => void) {
            this.changeHandler = handler;
        }
    }
}