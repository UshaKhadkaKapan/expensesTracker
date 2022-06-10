import TransactionSchema from "./User.schema.js";

// create a new user in the table
export const createTransaction = (newTransactionObj) => {
  return TransactionSchema(newTransactionObj).save();
};

// find a user, @userObj hould have email and password
export const findTransaction = (filter) => {
  return TransactionSchema.findOne(filter);
};

export const findTransactions = (filter) => {
  return TransactionSchema.find(filter);
};
