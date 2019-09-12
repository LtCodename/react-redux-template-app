const deepCopy = function (objectToCopy) {
  return JSON.parse(JSON.stringify(objectToCopy));
}

const defaultStore = {
  teams: ['Ferrari', 'Mercedes'],
  drivers: ['Vettel', 'Hamilton']
}

const ADD_TEAM = 'ADD_TEAM';
const ADD_DRIVER = 'ADD_DRIVER';

const reducer = (state = defaultStore, action) => {
  const copy = deepCopy(state);
  switch(action.type) {
    case ADD_TEAM:
      copy.teams.push(action.team);
      return copy;
      break;
    case ADD_DRIVER:
      copy.drivers.push(action.driver);
      return copy;
      break;
    default:
      return state;
  }
};

export default {
  reducer: reducer,
  actions: {
    ADD_TEAM,
    ADD_DRIVER
  }
};
