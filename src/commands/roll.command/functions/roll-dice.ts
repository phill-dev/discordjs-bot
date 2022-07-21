import randomNumber from '@src/commands/shared/random-number';

export default function rollDice(diceCount: number, diceEyes: number): number[] {
    const resultArray: number[] = [];

    for (let i = 0; i < diceCount; i++) {
        // eslint-disable-next-line no-await-in-loop
        const result = randomNumber(diceEyes);
        resultArray.push(result);
    }

    return resultArray;
}
