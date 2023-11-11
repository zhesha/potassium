import { InventoryItemBase } from "./Inventory";
import { LootItem } from "./Loot";

export interface Backpack {
    list: Array<InventoryItemBase>,
    add (item: LootItem): void;
}

export function createBackpack (): Backpack {
    return {
        list: [],
        add (item: LootItem) {
            this.list.push(item.item);
        }
    };
}