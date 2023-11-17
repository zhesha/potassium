import { InventoryItem } from "./Inventory";

export interface Backpack {
    list: Array<InventoryItem>,
    add (item: InventoryItem): void;
    remove (item: InventoryItem): void;
}

export function createBackpack (): Backpack {
    return {
        list: [],
        add (item: InventoryItem) {
            this.list.push(item);
        },
        remove (item: InventoryItem) {
            const index = this.list.indexOf(item);
            if (index !== -1) {
                this.list.splice(index, 1);
            }
        }
    };
}