export const validator = (data) => {
  let element = "";
  if (data.departureDate == "") {
    element = document.getElementById("err-departureDate");
    element.innerText = "Enter a valid date";
    element.style.color = "red";
    return false;
  }
  if (data.originId == "") {
    element = document.getElementById("err-origin");
    element.innerText = "Choose one option here";
    element.style.color = "red";
    return false;
  }
  if (data.destinationId == "") {
    element = document.getElementById("err-destination");
    element.innerText = "Choose one option here";
    element.style.color = "red";
    return false;
  }
  if (data.reason == "") {
    element = document.getElementById("err-reason");
    element.innerText = "This field can't be blank";
    element.style.color = "red";
    return false;
  }
  return true;
};
