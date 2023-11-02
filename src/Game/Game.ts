import { Enemy, createEnemy } from "./Enemy";

enum GameState {
    start,
    idle,
    moving,
    attacking
}

const attackTimeout = 1000;

interface Game {
    lastTimeStamp: number,
    isRun: boolean,
    time: number,
    gameState: GameState,
    attackTimer: number,
    enemy: Enemy | null,
    tick: (timeStamp: number) => void,
    runPressed: () => void,
    runReleased: () => void,
    timeChangeHandlers: (value: number) => void,
    onTimeChange: (handler: (value: number) => void) => void,
    enemyProgressHandlers: (value: number) => void,
    onEnemyProgress: (handler: (value: number) => void) => void,
    enemyReceiveDmgHandler: (currentHp: number) => void,
    onEnemyDmgReceive: (handler: (currentHp: number) => void) => void,
}

export const game: Game = {
    lastTimeStamp: 0,
    isRun: false,
    time: 0,
    gameState: GameState.start,
    attackTimer: 0,
    enemy: null,
    tick (timeStamp: number) {
        if (this.isRun && this.lastTimeStamp === 0) {
            this.lastTimeStamp = timeStamp;
        }
        if (this.isRun) {
            const deltaTime = timeStamp - this.lastTimeStamp;
            this.time += deltaTime;
            this.timeChangeHandlers(this.time);
            if (this.gameState === GameState.moving && this.enemy && !this.enemy.isArrive()) {
                this.enemy.changeTimer(deltaTime);
                this.enemyProgressHandlers(this.enemy.movingProgress());
                if (this.enemy.isArrive()) {
                    this.attackTimer = 0;
                    this.gameState = GameState.attacking;
                }
            }
            if (this.gameState === GameState.attacking) {
                if (this.attackTimer <= 0) {
                    this.attackTimer = attackTimeout;
                    this.enemy?.doDamage(1);
                    if (this.enemy?.isAlive()) {
                        this.enemyReceiveDmgHandler(this.enemy.hp);
                    } else {
                        this.enemy = createEnemy();
                        this.gameState = GameState.moving;
                    }
                } else {
                    this.attackTimer -= deltaTime;
                }
            }
        }
        this.lastTimeStamp = timeStamp;
    },
    runPressed () {
        this.isRun = true;
        this.lastTimeStamp = 0;
        if (this.gameState === GameState.start) {
            this.gameState = GameState.moving;
            this.enemy = createEnemy();
        }
    },
    runReleased () {
        this.isRun = false;
    },
    timeChangeHandlers: (value: number) => {},
    onTimeChange (handler: (value: number) => void) {
        this.timeChangeHandlers = handler;
    },
    enemyProgressHandlers: (value: number) => {},
    onEnemyProgress (handler: (value: number) => void) {
        this.enemyProgressHandlers = handler;
    },
    enemyReceiveDmgHandler: (currentHp: number) => {},
    onEnemyDmgReceive (handler: (currentHp: number) => void) {
        this.enemyReceiveDmgHandler = handler;
    }
}

function step(timeStamp: number) {
    window.requestAnimationFrame(step);
    game.tick(timeStamp);
}

window.requestAnimationFrame(step)