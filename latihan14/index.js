var SchoolType;
(function (SchoolType) {
  SchoolType["negeri"] = "negeri";
  SchoolType["swasta"] = "swasta";
})(SchoolType || (SchoolType = {}));
function isValidSchoolType(type) {
  return Object.values(SchoolType).includes(type);
}
function validateSchoolType(type) {
  if (!isValidSchoolType(type)) {
    throw new Error(
      "Invalid school type: "
        .concat(type, ". Allowed school type are: ")
        .concat(Object.values(SchoolType).join(", "))
    );
  }
  return type;
}
var Car = /** @class */ (function () {
  function Car(brand, name) {
    this.brand = brand;
    this.name = name;
  }
  return Car;
})();
var car = new Car("Wuling");
car.brand = "Toyota";
// car.name = "Kijang";
var user = {
  name: "Nando",
  age: 60,
  hobbies: ["godain resepsionis"],
};
function main(args) {
  console.log("asdasd");
  var nilai;
  console.log(car);
  var school = {
    name: "UPJ",
    type: SchoolType.negeri,
    address: "Bintaro",
  };
  console.log(school);
  console.log(validateSchoolType("negeri"));
  //   nilai = "testing";
}
main();
