import { InstantItemType, PocketItemType } from "./Inventory"

export interface PocketItem {
    name: string
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
    list: Array<PocketItem>
}

export interface Pocket {
    list: Array<PocketItem>
    limit: number
    getList (): Array<PocketItem>
    changeHandler (): void
    onChange (handler: () => void): void
    remove (item: PocketItem): void
    hasPlace (): boolean
    add (item: PocketItem): void
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
        add (item: PocketItem) {
            if (this.hasPlace()) {
                this.list.push(item);
            }
        },
        remove (item: PocketItem) {
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