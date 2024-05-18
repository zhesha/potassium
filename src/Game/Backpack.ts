import { game } from "./Game";
import { RealItem } from "./Loot";

export interface Backpack {
    list: Array<RealItem>,
    isFirst: boolean;
    add (item: RealItem): void;
    remove (item: RealItem): void;
    firstItemHandler: () => void,
    onFirstItem(handler: () => void): void
}

export function createBackpack (): Backpack {
    return {
        list: [],
        isFirst: true,
        add (item: RealItem) {
            if (this.isFirst) {
                this.firstItemHandler();
                this.isFirst = false
            }
            this.list.push(item);
            game.player.changeInventoryHandler();
        },
        remove (item: RealItem) {
            const index = this.list.indexOf(item);
            if (index !== -1) {
                this.list.splice(index, 1);
            }
        },
        firstItemHandler: () => { },
        onFirstItem(handler: () => void) {
            this.firstItemHandler = handler;
        },
    };
}