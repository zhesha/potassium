import { InstantItemType, PocketItemType } from "./Inventory"

export interface PocketLoot {
    name: string
    price: number
    hp?: number
    mana?: number
    type: PocketItemType
}

export interface InstantItem {
    name: string
    hp?: number
    mana?: number
    money?: number
    experience?: number
    type: InstantItemType
}

interface PocketSaveData {
    list: Array<PocketLoot>
}

export interface Pocket {
    list: Array<PocketLoot>
    limit: number
    getList (): Array<PocketLoot>
    changeHandler (): void
    onChange (handler: () => void): void
    remove (item: PocketLoot): void
    hasPlace (): boolean
    add (item: PocketLoot): void
    getSaveData (): PocketSaveData
    applySaveData (item: PocketSaveData): void
}

export function createPocket (): Pocket {
    return {
        list: [],
        limit: 4,
        getList () {
            return [...this.list];
        },
        changeHandler: () => {},
        onChange (handler: () => void) {
            this.changeHandler = handler;
        },
        hasPlace () {
            return this.list.length < this.limit;
        },
        add (item: PocketLoot) {
            if (this.hasPlace()) {
                this.list.push(item);
            }
        },
        remove (item: PocketLoot) {
            const index = this.list.indexOf(item);
            if (index !== -1) {
                this.list.splice(index, 1);
            }
            this.changeHandler();
        },
        getSaveData () {
            return {
                list: this.list
            }
        },
        applySaveData (data: PocketSaveData) {
            this.list = data.list;
        }
    }
}