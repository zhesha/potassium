import { game } from "./Game";
import { Inventory, createInventory } from "./Inventory";
import { Pocket, createPocket, PocketItem } from "./Pocket";
import { ProbabilityGenerator, createProbabilityDeck } from "./Probability";
import { SkillTreeItem, SkillsList, createSkills } from "./SkillsList";

interface CharData {
    experience: string
    level: string
    point: string
}

export interface Player {
    attackTimer: number,
    hp: number,
    _mana: number,
    mana: number,
    getMaxHp(): number,
    experience: number,
    usedPoints: number,
    inventory: Inventory,
    pocket: Pocket,
    skillsList: SkillsList,
    hitProbability: ProbabilityGenerator,
    updateAttackTimer: (delta: number) => void,
    isAttack: () => boolean,
    resetAttackTimer: () => void,
    startAttackTimer: () => void,
    doDamage: (dmg: number) => void,
    heal: (hp: number) => void,
    isAlive: () => boolean,
    getDmg: () => number,
    getBlockChance: () => number,
    getSkills (): Array<SkillTreeItem>;
    getPocketItems (): Array<PocketItem>;
    getCharData (): CharData;
    addExperience (value: number): void,
    getCurrentLevel(): number,
    getNextLevelExp(): number,
    getFreePoints (): number,
    changeInventoryHandler: () => void,
    onChangeInventory(handler: () => void): void
    charDataChangeHandler: () => void,
    onCharDataChange(handler: () => void): void
    skillsChangeHandler: () => void,
    onSkillsChange(handler: () => void): void
    restart(): void
    isHitSuccess(): boolean
}

const levelMultiplier = 50;

export function createPlayer (): Player {
    return {
        attackTimer: 0,
        hp: 100,
        _mana: 100,
        get mana() {
            return this._mana;
        },
        set mana(val: number) {
            this._mana = val;
            game.infoChangeHandler();
        },
        experience: 0,
        usedPoints: 0,
        inventory: createInventory(),
        pocket: createPocket(),
        skillsList: createSkills(),
        hitProbability: createProbabilityDeck(10),
        getMaxHp() {
            return 100 + this.skillsList.getMaxHp();
        },
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
            const realDmg = (dmg - this.inventory.getBlockValue()) * (100 - this.inventory.getBlockPercent()) / 100;
            if (realDmg > 1) {
                this.hp -= realDmg;
            } else {
                this.hp -= 1;
            }
            game.infoChangeHandler();
        },
        heal (hp: number) {
            this.hp += hp;
            if (this.hp > this.getMaxHp()) {
                this.hp = this.getMaxHp();
            }
            game.infoChangeHandler();
        },
        isAlive () {
            return this.hp > 0;
        },
        getDmg () {
            return this.inventory.getDmg();
        },
        getBlockChance () {
            return this.inventory.getBlockChance();
        },
        getSkills () {
            return [...this.skillsList.getList()];
        },
        getPocketItems () {
            return this.pocket.getList();
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
            let currentLevel = this.getCurrentLevel();
            let exp = 0;
            let level = 1;
            while (level <= currentLevel) {
                exp += level * levelMultiplier
                level += 1;
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
        },
        skillsChangeHandler: () => {},
        onSkillsChange(handler: () => void) {
            this.skillsChangeHandler = handler;
        },
        restart () {
            this.attackTimer = 0;
            this.hp = this.getMaxHp();
            this.mana = 100;
        },
        isHitSuccess() {
            return this.hitProbability.generate();
        }
    }
}