import { InventoryItem } from "./Inventory"

export interface Pocket {
    list: Array<InventoryItem>
    limit: number
    getList (): Array<InventoryItem>
    changeHandler (): void
    onChange (handler: () => void): void
    remove (item: InventoryItem): void
    hasPlace (): boolean
    add (item: InventoryItem): void
}

export function createPocket (): Pocket {
    return {
        list: [],
        limit: 4,
        getList () {
            return this.list;
        },
        changeHandler: () => {},
        onChange (handler: () => void) {
            this.changeHandler = handler;
        },
        hasPlace () {
            return this.list.length < this.limit;
        },
        add (item: InventoryItem) {
            if (this.hasPlace()) {
                this.list.push(item);
            }
        },
        remove (item: InventoryItem) {
            const index = this.list.indexOf(item);
            if (index !== -1) {
                this.list.splice(index, 1);
            }
        },
    }
}