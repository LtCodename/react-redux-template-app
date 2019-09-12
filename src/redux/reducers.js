import { combineReducers } from 'redux'

const defaultStore = {
  teams: ['Ferrari', 'Mercedes'],
  drivers: ['Vettel', 'Hamilton']
}

const ADD_TEAM = 'ADD_TEAM';

const teamsReducer = (state = defaultStore.teams, action) => {
  const copy = [...state];
  switch(action.type) {
    case ADD_TEAM:
      copy.push(action.team);
      return copy;
      break;
    default:
      return state;
  }
};

const ADD_DRIVER = 'ADD_DRIVER';

const driversReducer = (state = defaultStore.drivers, action) => {
  const copy = [...state];
  switch(action.type) {
    case ADD_DRIVER:
      copy.push(action.driver);
      return copy;
      break;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  teams: teamsReducer,
  drivers: driversReducer
});

export default {
  reducer: rootReducer,
  actions: {
    ADD_TEAM,
    ADD_DRIVER
  }
};
