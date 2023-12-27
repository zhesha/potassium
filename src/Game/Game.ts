import { InfoData } from "../components/GamePage/Info/Info";
import { Enemy, createEnemy } from "./Enemy";
import { Loot, loot } from "./Loot";
import { Player, createPlayer } from "./Player";
import { randomizer } from "./randomizer";

enum GameState {
    start,
    idle,
    moving,
    fighting
}

interface Game {
    lastTimeStamp: number,
    isRun: boolean,
    time: number,
    gameState: GameState,
    player: Player,
    enemy: Enemy | null,
    loot: Loot,
    distance: number,
    init(): void,
    tick: (timeStamp: number) => void,
    doMove: (deltaTime: number) => void,
    doPlayerAttack: (deltaTime: number) => void;
    doEnemyAttack: (deltaTime: number) => void;
    runPressed: () => void,
    runReleased: () => void,
    enemyProgressHandlers: (value: number) => void,
    onEnemyProgress: (handler: (value: number) => void) => void,
    enemyReceiveDmgHandler: (currentHp: number) => void,
    onEnemyDmgReceive: (handler: (currentHp: number) => void) => void,
    showLootHandler: (message: string) => void,
    onShowLoot: (handler: (message: string) => void) => void,
    infoChangeHandler: () => void,
    onInfoChange: (handler: () => void) => void,
    killEnemy(): void,
    addExperience(value: number): void,
    generateLoot(): void,
    getInfo(): InfoData,
    save(): void,
}

export const game: Game = {
    lastTimeStamp: 0,
    isRun: false,
    time: 0,
    gameState: GameState.start,
    player: createPlayer(),
    enemy: null,
    loot,
    distance: 0,
    init() {
        const savedDataStr = localStorage.getItem('data');
        if (savedDataStr) {
            const savedData = JSON.parse(savedDataStr);
            this.distance = savedData.distance || 0;
            this.player.hp = savedData.hp || 100;
            // this.player.maxHp = savedData.getMaxHp() || 100;
            this.player.experience = savedData.experience || 0;
            this.player.usedPoints = savedData.usedPoint || 0;
            this.player.inventory.applySaveData(savedData.inventory);
            this.player.pocket.applySaveData(savedData.pocket);
            this.player.skillsList.applySaveData(savedData.skillsList);
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
        this.enemyProgressHandlers(this.enemy.movingProgress());
        if (this.enemy.isArrive()) {
            this.player.startAttackTimer();
            this.gameState = GameState.fighting;
        }
    },
    doPlayerAttack(deltaTime: number) {
        if (this.player.isAttack()) {
            this.player.resetAttackTimer();
            if (randomizer.isSuccess(this.player.getHitChance())) {
                console.log('player hit');
                this.enemy?.doDamage(this.player.getDmg());
                if (this.enemy?.isAlive()) {
                    this.enemyReceiveDmgHandler(this.enemy.hp);
                } else {
                    this.killEnemy();
                }
            } else {
                console.log('miss');
            }
        } else {
            this.player.updateAttackTimer(deltaTime);
        }
    },
    doEnemyAttack(deltaTime: number) {
        if (this.enemy?.isAttack()) {
            console.log('enemy hit');
            this.enemy?.resetAttackTimer();
            if (!randomizer.isSuccess(this.player.getBlockChance())) {
                this.player?.doDamage(1);
                if (!this.player?.isAlive()) {
                    alert('You lost');
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
            this.enemy = createEnemy(0);
        }
    },
    runReleased() {
        this.isRun = false;
    },
    enemyProgressHandlers: (value: number) => { },
    onEnemyProgress(handler: (value: number) => void) {
        this.enemyProgressHandlers = handler;
    },
    enemyReceiveDmgHandler: (currentHp: number) => { },
    onEnemyDmgReceive(handler: (currentHp: number) => void) {
        this.enemyReceiveDmgHandler = handler;
    },
    showLootHandler: (message: string) => { },
    onShowLoot(handler: (message: string) => void) {
        this.showLootHandler = handler;
    },
    infoChangeHandler () {},
    onInfoChange (handler: () => void) {
        this.infoChangeHandler = handler
    },
    killEnemy: function () {
        this.enemy = createEnemy(this.distance);
        this.gameState = GameState.moving;
        this.isRun = false;
        this.generateLoot();
        this.addExperience(10);
        this.save();
    },
    addExperience (value: number) {
        this.player.addExperience(value);
    },
    generateLoot () {
        const item = this.loot.generate();
        this.player.inventory.backpack.add(item);
        this.showLootHandler(item.name);
    },
    getInfo(): InfoData {
        return {
            distance: Math.floor(this.distance),
            hp: this.player.hp,
        }
    },
    save() {
        const savedData = {
            distance: this.distance,
            hp: this.player.hp,
            // maxHp: this.player.getMaxHp(),
            experience: this.player.experience,
            usedPoint: this.player.usedPoints,
            inventory: this.player.inventory.getSaveData(),
            pocket: this.player.pocket.getSaveData(),
            skillsList: this.player.skillsList.getSaveData(),
        };
        localStorage.setItem('data', JSON.stringify(savedData));
    }
}

function step(timeStamp: number) {
    window.requestAnimationFrame(step);
    game.tick(timeStamp);
}

game.init();
window.requestAnimationFrame(step);