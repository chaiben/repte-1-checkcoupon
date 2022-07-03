function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  const currentDateTime = (currentDate && typeof currentDate === "string") ? Date.parse(currentDate) : false;
  const expirationDateTime = (expirationDate && typeof expirationDate === "string") ? Date.parse(expirationDate) : false;
  if (enteredCode === undefined || 
    correctCode === undefined || 
    enteredCode !== correctCode) return false;
  if(currentDateTime === false ||
    expirationDateTime === false || 
    isNaN(currentDateTime) || 
  isNaN(expirationDateTime) || 
  currentDateTime > expirationDateTime) return false;
  return true
}

module.exports = checkCoupon;