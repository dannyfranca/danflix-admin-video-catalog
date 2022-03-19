import { Chance } from "chance";

const chance = new Chance();

export const randomName = () => chance.sentence({ words: 2 });
export const randomDescription = (words = 10) => chance.sentence({ words });
export const randomDate = () =>
  chance.date({
    min: new Date(1960),
    max: new Date(2018),
    string: false,
  }) as Date;
