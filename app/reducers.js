/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import appReducer from 'containers/ApplicationPage/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import userReducer from 'containers/User/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    app: appReducer,
    user: userReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
