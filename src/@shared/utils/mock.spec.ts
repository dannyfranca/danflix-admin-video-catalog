import {
  randomDate,
  randomDescription,
  randomName,
  randomSentence,
} from './mock';

describe('Mock utils', () => {
  it('shoud generate a 3 words sentence', () => {
    const sentence = randomSentence(3);
    expect(sentence.split(' ').length).toBe(3);
  });

  it('shoud generate a 2 words sentence', () => {
    const sentence = randomName();
    expect(sentence.split(' ').length).toBe(2);
  });

  it('shoud generate a 10 words sentence', () => {
    const sentence = randomDescription();
    expect(sentence.split(' ').length).toBe(10);
  });

  it('shoud generate a random Date between 1970 and 2050', () => {
    const date = randomDate();
    expect(date.getFullYear()).toBeGreaterThanOrEqual(1969);
    expect(date.getFullYear()).toBeLessThanOrEqual(2051);
  });
});
