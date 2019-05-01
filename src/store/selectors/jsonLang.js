import { createSelector } from 'reselect'
// selector
const getLang = (state) => state.clientReducer.json_lang
// reselect function
export const getLangState = createSelector(
  [ getLang ],
  (json_lang) => json_lang
)