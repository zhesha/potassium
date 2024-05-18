import { EffectType } from "./Effects";
import { game } from "./Game";
import { Inventory, createInventory } from "./Inventory";
import { InventoryItemBase } from "./Loot";
import { Pocket, createPocket, PocketLoot, isConsumable } from "./Pocket";
import { ProbabilityGenerator, createProbabilityDeck } from "./Probability";
import { SkillItem, SkillType, SkillsList, createSkills } from "./SkillsList";

interface CharData {
    experience: string
    level: string
    point: string
}

export interface Player {
    attackTimer: number,
    hp: number,
    _money: number
    money: number
    _mana: number,
    mana: number,
    getMaxHp(): number,
    experience: number,
    usedPoints: number,
    inventory: Inventory,
    pocket: Pocket,
    skillsList: SkillsList,
    hitProbability: ProbabilityGenerator,
    restoreTimer: number,
    tick(deltaTime: number): void,
    updateAttackTimer: (delta: number) => void,
    isAttack: () => boolean,
    resetAttackTimer: () => void,
    startAttackTimer: () => void,
    doDamage: (dmg: number) => void,
    heal: (hp: number) => void,
    isAlive: () => boolean,
    getDmg: () => number,
    getBlockChance: () => number,
    getSkills (): Array<SkillItem>;
    getPocketItems (): Array<PocketLoot>;
    getConsumableItems (): Array<PocketLoot>;
    getCharData (): CharData;
    addExperience (value: number): void,
    getCurrentLevel(): number,
    getNextLevelExp(): number,
    getFreePoints (): number,
    changeInventoryHandler: () => void,
    onChangeInventory(handler: () => void): void
    levelUpHandler: () => void,
    onLevelUp(handler: () => void): void
    charDataChangeHandler: () => void,
    onCharDataChange(handler: () => void): void
    skillsChangeHandler: () => void,
    onSkillsChange(handler: () => void): void
    restart(): void
    isHitSuccess(): boolean
    addMana(value: number): void
    getMaxMana(): number
    getReturnDmg(): number
    getEffectsValueFromItem(effectType: EffectType, item?: InventoryItemBase): number
}

const levelMultiplier = 100;

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
        _money: 0,
        get money() {
            return this._money;
        },
        set money(val: number) {
            this._money = val;
            game.infoChangeHandler();
        },
        experience: 0,
        usedPoints: 0,
        inventory: createInventory(),
        pocket: createPocket(),
        skillsList: createSkills(),
        hitProbability: createProbabilityDeck(10),
        restoreTimer: 0,
        tick(deltaTime: number) {
            this.restoreTimer -= deltaTime;
            if (this.restoreTimer <= 0) {
                this.restoreTimer = 1000;
                const hpRestore = this.skillsList.getHpRestore()
                const mpRestore = this.skillsList.getMpRestore()
                if (hpRestore) {
                    this.heal(hpRestore);
                }
                if (mpRestore) {
                    this.addMana(mpRestore);
                }
            }
        },
        getMaxHp() {
            return 100 + this.skillsList.getMaxHp() + this.inventory.getMaxHp();
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
                this.hp -= Math.floor(realDmg);
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
        getConsumableItems () {
            return this.inventory.backpack.list.filter(item => isConsumable(item)) as Array<PocketLoot>;
        },
        getCharData () {
            return {
                experience: `${this.experience}/${this.getNextLevelExp()}`,
                level: this.getCurrentLevel().toString(),
                point: this.getFreePoints().toString(),
            };
        },
        addExperience (value: number) {
            const skill = this.skillsList.findSkillByType(SkillType.fastLearner);
            let multiplier = 1;
            if (skill) {
                const m = [1.2, 1.4, 1.6, 1.8, 2, 2.5, 3];
                multiplier = m[skill.level - 1];
            }
            const prevLevel = this.getCurrentLevel();
            this.experience += value * multiplier;
            const currLevel = this.getCurrentLevel();
            if (currLevel !== prevLevel) {
                this.levelUpHandler();
            }
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
        levelUpHandler: () => { },
        onLevelUp(handler: () => void) {
            this.levelUpHandler = handler;
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
            this.mana = this.getMaxMana();
        },
        isHitSuccess() {
            return this.hitProbability.generate();
        },
        addMana(value: number) {
            if (this.mana + value > this.getMaxMana()) {
                this.mana = this.getMaxMana();
            } else {
                this.mana += value;
            }
        },
        getMaxMana () {
            return 100 + this.inventory.getMaxMana();
        },
        getReturnDmg() {
            return this.getEffectsValueFromItem(EffectType.returnDmg, this.inventory.weapon) +
                this.getEffectsValueFromItem(EffectType.returnDmg, this.inventory.armor) +
                this.getEffectsValueFromItem(EffectType.returnDmg, this.inventory.shield) +
                this.getEffectsValueFromItem(EffectType.returnDmg, this.inventory.gloves) +
                this.getEffectsValueFromItem(EffectType.returnDmg, this.inventory.boots) +
                this.getEffectsValueFromItem(EffectType.returnDmg, this.inventory.helmet);
        },
        getEffectsValueFromItem(effectType: EffectType, item?: InventoryItemBase) {
            if (!item) {
                return 0;
            }
            return item.effects.filter(effect => effect.type === effectType).reduce((memo, effect) => memo + effect.baseValue + effect.extraValue, 0);
        }
    }
}
