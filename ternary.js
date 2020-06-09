const getResponse = (isAmazing) => {
  return isAmazing ? console.log("You are sooo cool") : console.log("You suck");
};

console.log(getResponse(true));

console.log(getResponse(false));
