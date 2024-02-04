import { RealItem } from "./Loot";

export interface Backpack {
    list: Array<RealItem>,
    add (item: RealItem): void;
    remove (item: RealItem): void;
}

export function createBackpack (): Backpack {
    return {
        list: [],
        add (item: RealItem) {
            this.list.push(item);
        },
        remove (item: RealItem) {
            const index = this.list.indexOf(item);
            if (index !== -1) {
                this.list.splice(index, 1);
            }
        }
    };
}