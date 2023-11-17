import { Inventory, createInventory } from "./Inventory";

export interface Player {
    attackTimer: number,
    hp: number,
    inventory: Inventory,
    updateAttackTimer: (delta: number) => void,
    isAttack: () => boolean,
    resetAttackTimer: () => void,
    startAttackTimer: () => void,
    doDamage: (dmg: number) => void,
    isAlive: () => boolean,
    getDmg: () => number,
    getHitChance: () => number,
    getBlockChance: () => number,
    changeInventoryHandler: () => void,
    onChangeInventory(handler: () => void): void
}

export function createPlayer (): Player {
    return {
        attackTimer: 0,
        hp: 100,
        inventory: createInventory(),
        updateAttackTimer (delta: number) {
            this.attackTimer -= delta;
        },
        isAttack () {
            return this.attackTimer <= 0;
        },
        resetAttackTimer () {
            this.attackTimer = this.inventory.getSpeed();
        },
        startAttackTimer () {
            this.attackTimer = 0;
        },
        doDamage (dmg: number) {
            const realDmg = (dmg - this.inventory.getBlockValue()) * this.inventory.getBlockPercent() / 100;
            if (realDmg > 1) {
                this.hp -= dmg;
            } else {
                this.hp -= 1;
            }
        },
        isAlive () {
            return this.hp > 0;
        },
        getDmg () {
            return this.inventory.getDmg();
        },
        getHitChance () {
            return this.inventory.getHitChance();
        },
        getBlockChance () {
            return this.inventory.getBlockChance();
        },
        changeInventoryHandler: () => { },
        onChangeInventory(handler: () => void) {
            this.changeInventoryHandler = handler;
        }
    }
}