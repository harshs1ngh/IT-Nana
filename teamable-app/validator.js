function isInvalidEmail(userObject) {
  return !userObject.email.includes("@");
}

// exports.isInvalidEmail = (userObject) => {
//   return !userObject.email.includes("@");
// };

function isEmptyPayload(userObject) {
  return Object.keys(payload).length === 0;
}

module.exports = { isInvalidEmail, isEmptyPayload };
