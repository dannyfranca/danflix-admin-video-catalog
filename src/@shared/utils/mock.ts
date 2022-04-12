import { Chance } from 'chance';

const chance = new Chance();

export const randomSentence = (words: number) => chance.sentence({ words });
export const randomName = () => randomSentence(2);
export const randomDescription = () => randomSentence(10);
export const randomDate = () =>
  chance.date({
    min: new Date(1970),
    max: new Date(2050),
    string: false,
  }) as Date;
