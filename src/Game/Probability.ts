import { rand } from "./rand";

export interface ProbabilityGenerator {
    generate: () => boolean,
    changeProbability: (newProbability: number) => void,
    toString: () => string,
}

type ChanceProbability = number;
const fullDeckSize = 100;

function hasExtraWins (chance: number) {
    return chance !== 50 && chance !== 33 && chance !== 25 && chance !== 20 && chance !== 10
  }

export function createProbabilityDeck (chance: ChanceProbability): ProbabilityGenerator {
    let chanceText = chance.toString();
    let isInverted = false;
    if (chance > 50) {
      chance = 100 - chance;
      isInverted = true;
    }
  
    let changeWinIndexOn = 100;
    if (hasExtraWins(chance)) {
      changeWinIndexOn = 0;
    }
  
    const generator = {
      deck: Array<boolean>(),
      currentIndex: -1,
      winIndex: -1,
      looseIndex: -1,
      changeExtraIndexOn: changeWinIndexOn,
      isInverted: isInverted,
      generate() {
        if (this.isInverted) {
          return !this.innerGenerate();
        }
        return this.innerGenerate();
      },
      innerGenerate() {
        if(this.deck.length === 0) {
          this.fillDeck();
        }
        this.currentIndex++;
        if (this.currentIndex > this.changeExtraIndexOn) {
          this.generateWinIndex(chance);
        }
        if (this.currentIndex === this.winIndex) {
          return true;
        }
        if (this.currentIndex === this.looseIndex) {
          return false;
        }
        if (this.currentIndex > 100) {
          this.currentIndex = -1;
          this.generateWinIndex(chance);
        }
        return this.deck.pop() || false;
      },
      fillDeck() {
        if (chance <= 50 && chance >= 40) {
          this.deck = [true, false].sort(() => Math.random() - 0.5);
        } else if (chance < 40 && chance >= 30) {
          this.deck = [true, false, false].sort(() => Math.random() - 0.5);
        } else if (chance < 30 && chance > 20) {
          this.deck = [true, false, false, false].sort(() => Math.random() - 0.5);
        } else if (chance <= 20 && chance >= 15) {
          this.deck = [true, false, false, false, false].sort(() => Math.random() - 0.5);
        } else if (chance < 15 && chance > 5) {
          this.deck = [true, false, false, false, false, false, false, false, false, false].sort(() => Math.random() - 0.5);
        } else {
          this.deck = [false];
        }
      },
      changeProbability(newChance: ChanceProbability) {
          chanceText = newChance.toString();
        if (newChance > 50) {
          chance = 100 - newChance;
          this.isInverted = true;
        } else {
          chance = newChance;
          this.isInverted = false;
        }
        this.fillDeck();
      },
      generateWinIndex(chance: ChanceProbability) {
        if (!hasExtraWins(chance)) {
          this.changeExtraIndexOn = -1;
          this.winIndex = -1;
          return;
        }
        let extraChance;
        if (chance < 50 && chance >= 40) {
          extraChance = (chance - 50) * 2;
        } else if (chance < 40 && chance >= 30 && chance !== 33) {
          extraChance = (chance - 33);
        } else if (chance < 30 && chance > 20 && chance !== 25) {
          extraChance = (chance - 25);
        } else if (chance < 20 && chance >= 15 && chance !== 20) {
          extraChance = (chance - 20);
        } else if (chance < 15 && chance > 5 && chance !== 10) {
          extraChance = (chance - 10);
        } else {
          extraChance = chance;
        }
        if (extraChance < 0) {
          extraChance = Math.abs(extraChance);
          this.changeExtraIndexOn = this.currentIndex + fullDeckSize / extraChance;
          this.looseIndex = rand.randInRange(this.currentIndex, Math.floor(this.changeExtraIndexOn));
        } else {
          extraChance = Math.abs(extraChance);
          this.changeExtraIndexOn = this.currentIndex + fullDeckSize / extraChance;
          this.winIndex = rand.randInRange(this.currentIndex, Math.floor(this.changeExtraIndexOn));
        }
      },
      toString() {
          return chanceText;
      }
    };
  
    return generator;
}