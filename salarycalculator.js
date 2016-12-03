  // var salary = document.getElementById("basic-salary").value;
  // var increment= document.getElementById("increment").value;
  // var list = document.getElementById("cat");
  // var employee = list.options[list.selectedIndex].value;
  // var list1 = document.getElementById("time");
  // var time = list1.options[list1.selectedIndex].value;
  // document.getElementById('generate').addEventListener("click", salaryCal);



function salaryCal(){
  var result = 0;
  var salary = document.getElementById("basic-salary").value;
  var increase= document.getElementById("increment").value;
  var list = document.getElementById("cat");
  var employee = list.options[list.selectedIndex].value;
  var list1 = document.getElementById("time");
  var time = list1.options[list1.selectedIndex].value;

   var name = document.getElementById("nameinput").value;

  console.log(salary);
  if (employee === "interns"){
    result = salary * time;
     console.log(result);
  }
  else if (employee === "associates"){
    result = salary * increase;
    result = result * time;
    console.log(result);
  }
  else if (employee === "managers"){
    result = salary * increase;
    result = result * increase * time;
    console.log(result);
  }
  else if (employee === "c-executives") {
    result = salary * increase;
    result = result1 * increase * increase * time;
    console.log(result);
  }
  else if (employee === "director") {
    result = salary * increase;
    result = result * increase * increase * increase * time;
    console.log(result);
  }
  document.getElementById('totalSalary').innerHTML = result;
  document.getElementById('name').innerHTML = name;
  document.getElementById('basic').innerHTML = salary;
  document.getElementById('increase').innerHTML = increase;
  document.getElementById('category').innerHTML = employee;
  document.getElementById('experience').innerHTML = time;
  

}


// switch(employee){

//   case: "Intern"
//     result = salary * time;
//      console.log(result);
//      break;
//   case: "Associate"
// }
