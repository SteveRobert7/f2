/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
    const developers = arr
        .filter((employee) => employee.profession === "developer")
        .map((developer) => {
            console.log(developer);
            return developer;
        });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log

   arr.forEach((employee) => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

function addData() {
  //Write your code here, just console.log

  const newEmployee = { id: 4, name: "Japan", age: "24", profession: "intern" };
    arr.push(newEmployee);
    console.log(newEmployee);
}

function removeAdmin() {
  //Write your code here, just console.log

  arr = arr.filter((employee) => employee.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log

  const newArray = [
        { id: 5, name: "ajay", age: "27", profession: "Teacher" },
        { id: 6, name: "Sachin", age: "22", profession: "Driver" },
        { id: 7, name: "Rajiv", age: "28", profession: "Manager" },
    ];

    const combinedArray = arr.concat(newArray);
    console.log(combinedArray);

}
