import { createSelector } from 'reselect'
// selector
const getTable = (state) => state.clientReducer.table
// reselect function
export const getTableState = createSelector(
  [ getTable ],
  (table) => table
)