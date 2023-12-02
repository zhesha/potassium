import { game } from "./Game";
import { Inventory, createInventory } from "./Inventory";
import { Pocket, createPocket } from "./Pocket";
import { Skill } from "./Skill";

interface CharData {
    experience: string
    level: string
    point: string
}

export interface Player {
    attackTimer: number,
    hp: number,
    experience: number,
    usedPoints: number,
    inventory: Inventory,
    pocket: Pocket,
    updateAttackTimer: (delta: number) => void,
    isAttack: () => boolean,
    resetAttackTimer: () => void,
    startAttackTimer: () => void,
    doDamage: (dmg: number) => void,
    isAlive: () => boolean,
    getDmg: () => number,
    getHitChance: () => number,
    getBlockChance: () => number,
    getSkills (): Array<Skill>;
    getCharData (): CharData;
    addExperience (value: number): void,
    getCurrentLevel(): number,
    getNextLevelExp(): number,
    getFreePoints (): number,
    changeInventoryHandler: () => void,
    onChangeInventory(handler: () => void): void
    charDataChangeHandler: () => void,
    onCharDataChange(handler: () => void): void
}

const levelMultiplier = 50;

export function createPlayer (): Player {
    return {
        attackTimer: 0,
        hp: 100,
        experience: 0,
        usedPoints: 0,
        inventory: createInventory(),
        pocket: createPocket(),
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
            game.infoChangeHandler();
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
        getSkills () {
            // TODO implementation
            return [];
        },
        getCharData () {
            return {
                experience: `${this.experience}/${this.getNextLevelExp()}`,
                level: this.getCurrentLevel().toString(),
                point: this.getFreePoints().toString(),
            };
        },
        addExperience (value: number) {
            this.experience += value;
        },
        getCurrentLevel() {
            let level = 1;
            let prevLevelExp = 0;
            while (true) {
                prevLevelExp += level * levelMultiplier;
                if (this.experience < prevLevelExp) {
                    return level;
                }
                level += 1;
            }
        },
        getNextLevelExp() {
            let level = this.getCurrentLevel() - 1;
            let exp = 0;
            while (level > 1) {
                exp += level * levelMultiplier
                level -= 1;
            }
            return exp;
        },
        getFreePoints () {
            return this.getCurrentLevel() - 1 - this.usedPoints;
        },
        changeInventoryHandler: () => { },
        onChangeInventory(handler: () => void) {
            this.changeInventoryHandler = handler;
        },
        charDataChangeHandler: () => {},
        onCharDataChange(handler: () => void) {
            this.charDataChangeHandler = handler;
        }
    }
}