import TransactionSchema from "./User.schema.js";

// create a new user in the table
export const createTransaction = (newUserObj) => {
  return TransactionSchema(newTransactionObj).save();
};

// find a user, @userObj hould have email and password
export const findUser = (TransactionObj) => {
  return TransactionSchema.findOne(TransactionObj);
};
