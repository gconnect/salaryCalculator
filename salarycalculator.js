function salaryCal(employee, salary, time, increase){
  var result = 0;
  if (employee === "Intern"){
    result = salary * time;
    return result;
  }
  else if (employee === "Associate"){
    result1 = salary * increase;
    result = result1 * time;
    return result;
  }
  else if (employee === "Manager"){
    result1 = salary * increase;
    result = result1 * increase * time;
    return result;
  }
  else if (employee === "C-executives") {
    result1 = salary * increase;
    result = result1 * increase * increase * time;
    return result;
  }
  else if (employee === "Director") {
    result1 = salary * increase;
    result = result1 * increase * increase * increase * time;
    return result;
  }
}