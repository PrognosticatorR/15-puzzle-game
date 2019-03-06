export const nameValidation = playerName => {
  let errors = {};
  let inputIsValid = true;
  if (playerName === "") {
    inputIsValid = false;
    errors["playername"] = "Cannot be empty";
  }
  if (playerName.length <= 2) {
    inputIsValid = false;
    errors["playername"] = "Cannot be less then 3 charecters";
  }
  this.setState({ errors: errors });
  return inputIsValid;
};
