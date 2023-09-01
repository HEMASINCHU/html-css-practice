const user = {
  name: "hema",
  age: 25,
};
const jsonStringify = JSON.stringify(user);
console.log(jsonStringify);

const jsonString = '{"name":"John","age":30}';
const parsedObj = JSON.parse(jsonString);
console.log(parsedObj);
