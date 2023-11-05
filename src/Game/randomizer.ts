export const randomizer = {
    isSuccess (chance: number) {
        return Math.random() < chance / 100;
    }
}