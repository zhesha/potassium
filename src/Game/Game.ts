import { InfoData } from "../components/GamePage/Info/Info";
import { Enemy, createEnemy } from "./Enemy";
import { InstantItemType } from "./Inventory";
import { Loot, getRealItemFromLoot, loot } from "./Loot";
import { Npc, createNpc } from "./Npc";
import { Player, createPlayer } from "./Player";
import { randomizer } from "./randomizer";

const npcRate = 20;

enum GameState {
    start,
    moving,
    fighting,
    npcMenu,
}

interface Game {
    needCreateNpc(): boolean;
    lastTimeStamp: number,
    isRun: boolean,
    time: number,
    enemyKilledInRun: number,
    gameState: GameState,
    player: Player,
    enemy: Enemy | null,
    npc: Npc | null,
    loot: Loot,
    npcIndexesList: Array<number>,
    distance: number,
    init(): void,
    tick: (timeStamp: number) => void,
    doMove: (deltaTime: number) => void,
    doNpcMove: (deltaTime: number) => void,
    spawnEnemy(): void,
    doPlayerAttack: (deltaTime: number) => void;
    doEnemyAttack: (deltaTime: number) => void;
    runPressed: () => void,
    runReleased: () => void,
    enemyProgressHandlers: () => void,
    onEnemyProgress: (handler: () => void) => void,
    npcProgressHandlers: () => void,
    onNpcProgress: (handler: () => void) => void,
    enemyReceiveDmgHandler: (currentHp: number) => void,
    onEnemyDmgReceive: (handler: (currentHp: number) => void) => void,
    lootMessage?: string,
    getLootMessage(): string | undefined,
    showLootHandler: () => void,
    onShowLoot: (handler: () => void) => void,
    infoChangeHandler: () => void,
    onInfoChange: (handler: () => void) => void,
    hitEnemy (dmg: number): void,
    killEnemy(): void,
    addExperience(value: number): void,
    generateLoot(): void,
    getInfo(): InfoData,
    save(): void,
    gameOverHandler: () => void,
    onGameOver(handler: () => void): void
    reachNpcHandler: () => void,
    onReachNpc(handler: () => void): void
    restart(): void
}

export const game: Game = {
    lastTimeStamp: 0,
    isRun: false,
    time: 0,
    enemyKilledInRun: 0,
    gameState: GameState.start,
    player: createPlayer(),
    enemy: null,
    npc: null,
    loot,
    npcIndexesList: [],
    distance: 0,
    init() {
        const savedDataStr = localStorage.getItem('data');
        if (savedDataStr) {
            const savedData = JSON.parse(savedDataStr);
            this.distance = savedData.distance || 0;
            this.player.hp = savedData.hp || 100;
            this.player.experience = savedData.experience || 0;
            this.player.mana = savedData.mana || 0;
            this.player.usedPoints = savedData.usedPoint || 0;
            this.player.money = savedData.money || 0;
            this.enemyKilledInRun = savedData.enemyKilledInRun || 0;
            this.player.inventory.applySaveData(savedData.inventory);
            this.player.pocket.applySaveData(savedData.pocket);
            this.player.skillsList.applySaveData(savedData.skillsList);
            this.loot.applySavedData(savedData.loot);
            this.npcIndexesList = savedData.npcIndexesList;
        }
    },
    tick(timeStamp: number) {
        if (this.isRun && this.lastTimeStamp === 0) {
            this.lastTimeStamp = timeStamp;
        }
        if (this.isRun) {
            const deltaTime = timeStamp - this.lastTimeStamp;
            this.time += deltaTime;
            if (this.gameState === GameState.moving && this.enemy && !this.enemy.isArrive()) {
                this.doMove(deltaTime);
                this.distance += 1.4 * deltaTime / 1000;
                this.infoChangeHandler();
            }
            if (this.gameState === GameState.moving && this.npc && !this.npc.isArrive()) {
                this.doNpcMove(deltaTime);
                this.distance += 1.4 * deltaTime / 1000;
                this.infoChangeHandler();
            }
            if (this.gameState === GameState.fighting) {
                this.doEnemyAttack(deltaTime);
                this.doPlayerAttack(deltaTime);
            }
        }
        this.lastTimeStamp = timeStamp;
    },
    doMove(deltaTime: number) {
        if (!this.enemy) {
            return;
        }
        this.enemy.changeTimer(deltaTime);
        this.enemyProgressHandlers();
        if (this.enemy.isArrive()) {
            this.player.startAttackTimer();
            this.gameState = GameState.fighting;
        }
    },
    doNpcMove(deltaTime: number) {
        if (!this.npc) {
            return;
        }
        this.npc.changeTimer(deltaTime);
        this.npcProgressHandlers();
        if (this.npc.isArrive()) {
            this.reachNpcHandler();
            this.isRun = false;
            this.gameState = GameState.npcMenu;
        }
    },
    spawnEnemy () {
        this.enemy = createEnemy(this.enemyKilledInRun);
        this.npc = null;

        this.gameState = GameState.moving;
        this.enemyProgressHandlers();
        this.infoChangeHandler();
    },
    doPlayerAttack(deltaTime: number) {
        if (this.player.isAttack()) {
            this.player.resetAttackTimer();
            if (this.player.isHitSuccess()) {
                this.hitEnemy(this.player.getDmg());
            } else {
                console.log('miss');
            }
        } else {
            this.player.updateAttackTimer(deltaTime);
        }
    },
    hitEnemy (dmg: number) {
        console.log('player hit');
        this.enemy?.doDamage(dmg);
        if (this.enemy?.isAlive()) {
            this.enemyReceiveDmgHandler(this.enemy.hp);
        } else {
            this.killEnemy();
        }
    },
    doEnemyAttack(deltaTime: number) {
        if (this.enemy?.isAttack()) {
            console.log('enemy hit');
            this.enemy?.resetAttackTimer();
            if (!randomizer.isSuccess(this.player.getBlockChance())) {
                this.player?.doDamage(this.enemy?.dmg);
                if (!this.player?.isAlive()) {
                    game.gameOverHandler();
                }
            } else {
                console.log('block');
            }
        } else {
            this.enemy?.updateAttackTimer(deltaTime);
        }
    },
    runPressed() {
        this.isRun = true;
        this.lastTimeStamp = 0;
        if (this.gameState === GameState.start) {
            this.gameState = GameState.moving;
            this.enemy = createEnemy(this.enemyKilledInRun);
        }
    },
    runReleased() {
        this.isRun = false;
    },
    enemyProgressHandlers: () => { },
    onEnemyProgress(handler: () => void) {
        this.enemyProgressHandlers = handler;
    },
    npcProgressHandlers: () => { },
    onNpcProgress(handler: () => void) {
        this.npcProgressHandlers = handler;
    },
    enemyReceiveDmgHandler: (currentHp: number) => { },
    onEnemyDmgReceive(handler: (currentHp: number) => void) {
        this.enemyReceiveDmgHandler = handler;
    },
    lootMessage: undefined,
    getLootMessage() {
        return this.lootMessage;
    },
    showLootHandler: () => { },
    onShowLoot(handler: () => void) {
        this.showLootHandler = handler;
    },
    infoChangeHandler () {},
    onInfoChange (handler: () => void) {
        this.infoChangeHandler = handler
    },
    killEnemy: function () {
        this.addExperience(this.enemy!.experience);
        this.enemyKilledInRun += 1;
        if (this.needCreateNpc()) {
            this.npc = createNpc();
            this.enemy = null;
        } else {
            this.spawnEnemy();
        }
        this.gameState = GameState.moving;
        this.isRun = false;
        this.generateLoot();
        this.enemyProgressHandlers();
        this.infoChangeHandler();
        this.save();
    },
    addExperience (value: number) {
        this.player.addExperience(value);
    },
    generateLoot () {
        const item = this.loot.generate();
        if (item.type === InstantItemType.healing) {
            this.player.heal(item.hp!);
        } else if (item.type === InstantItemType.money) {
            this.player.money += item.money!;
        } else if (item.type === InstantItemType.experience) {
            this.player.addExperience(item.experience!);
        } else {
            const realItem = getRealItemFromLoot(item);
            if (realItem) {
                this.player.inventory.backpack.add(realItem);
            }
        }
        this.lootMessage = item.name;
        this.showLootHandler();
    },
    needCreateNpc () {
        return (this.enemyKilledInRun % npcRate) === 0;
    },
    getInfo(): InfoData {
        return {
            distance: Math.floor(this.distance),
            hp: this.player.hp,
            maxHp: this.player.getMaxHp(),
            mana: this.player.mana,
            money: this.player.money,
            enemyKilled: this.enemyKilledInRun,
        }
    },
    save() {
        const savedData = {
            distance: this.distance,
            hp: this.player.hp,
            experience: this.player.experience,
            usedPoint: this.player.usedPoints,
            money: this.player.money,
            mana: this.player.mana,
            inventory: this.player.inventory.getSaveData(),
            pocket: this.player.pocket.getSaveData(),
            skillsList: this.player.skillsList.getSaveData(),
            loot: this.loot.getSavedData(),
            npcIndexesList: this.npcIndexesList,
            enemyKilledInRun: this.enemyKilledInRun,
        };
        localStorage.setItem('data', JSON.stringify(savedData));
    },
    gameOverHandler: () => {},
    onGameOver(handler: () => void) {
        this.gameOverHandler = handler;
    },
    reachNpcHandler: () => {},
    onReachNpc(handler: () => void) {
        this.reachNpcHandler = handler;
    },
    restart() {
        this.distance = 0;
        this.enemy = null;
        this.npc = null;
        this.isRun = false;
        this.enemyKilledInRun = 0;
        this.distance = 0;
        this.gameState = GameState.start;
        this.npcIndexesList = [];
        this.player.restart();
        this.enemyProgressHandlers();
        this.infoChangeHandler();
    }
}

function step(timeStamp: number) {
    window.requestAnimationFrame(step);
    game.tick(timeStamp);
}

game.init();
window.requestAnimationFrame(step);