// Write your solution in this file!
let employee = {
  name: "sam",
};
function updateEmployeeWithKeyAndValue(object, key, value) {
  let object2 = { ...object };
  object2[key] = value;
  return object2;
}
console.log(
  updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway")
);
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
console.log(
  destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "streetAddress",
    "12 Broadway"
  )
);

function deleteFromEmployeeByKey(object, key) {
  let object3 = { ...object };
  delete object3[key];
  return object3;
}
console.log(deleteFromEmployeeByKey(employee, "name"));
function destructivelyDeleteFromEmployeeByKey(object, key) {
  delete object[key];
  return object;
}
console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"));
