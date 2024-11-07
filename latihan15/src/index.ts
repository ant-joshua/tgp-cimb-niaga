import Geometry from "./helpers/geometry";
import { BaseResponse } from "./models/base_response";
import Person, { Gender, Zodiac } from "./models/person";

function main() {
  const person: Person = new Person();
  person.name = "Nando";
  person.age = 30;
  person.weight = 65;
  person.height = 165;
  person.gender = Gender.Male;
  person.zodiac = Zodiac.Gemini;
  person.isMarriage = false;
  person.isDating = false;

  console.log("BMI:", person.calculateBMI());

  console.log(Geometry.calculateAreaCircle(10));

  const baseResponse = new BaseResponse<Person>(200, "Success", person);

  console.log(baseResponse.data.name);
}

/**
 * {
 *   status: 200,
 *    message: 'Success',
 *   data: {
 *    name: 'Nando',
 *    }
 * }
 */

main();
