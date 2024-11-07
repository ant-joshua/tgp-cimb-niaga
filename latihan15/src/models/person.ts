export enum Gender {
  Male = "male",
  Female = "female",
}

export enum Zodiac {
  Aries = "aries",
  Taurus = "taurus",
  Gemini = "gemini",
  Cancer = "cancer",
  Leo = "leo",
  Virgo = "virgo",
  Libra = "libra",
  Scorpio = "scorpio",
  Sagittarius = "sagittarius",
  Capricorn = "capricorn",
  Aquarius = "aquarius",
  Pisces = "pisces",
}

export default class Person {
  name: string;
  age: number;
  weight: number;
  gender: Gender;
  height: number;
  zodiac: Zodiac;
  isMarriage: boolean;
  isDating: boolean;

  calculateBMI(): number {
    return (this.weight / (this.height * this.height)) * 10_000;
  }
}
