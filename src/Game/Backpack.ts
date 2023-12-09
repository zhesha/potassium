import { InventoryItem } from "./Inventory";
import { LootItem } from "./Loot";

export interface Backpack {
    list: Array<LootItem>,
    add (item: LootItem): void;
    remove (item: LootItem): void;
}

export function createBackpack (): Backpack {
    return {
        list: [],
        add (item: LootItem) {
            this.list.push(item);
        },
        remove (item: LootItem) {
            const index = this.list.indexOf(item);
            if (index !== -1) {
                this.list.splice(index, 1);
            }
        }
    };
}