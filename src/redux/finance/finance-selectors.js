export const getTransactions = state => state.finance.transactions;
export const getCategories = state => state.finance.categories;
export const getSummary = state => state.finance.summary;
export const getError = state => state.finance.error;
export const getIsLoading = state => state.finance.isLoading;
export const getUserBalanceFromTransaction = ({ transactions }) => {
  const length = transactions.length - 1;
  return transactions[length].balanceAfter;
};
