const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

const CREATE = 'CREATE';
const READ = 'READ';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';


// helpers
export function action(type, payload) {
  console.log(type, payload, '55555555555555555')
  return typeof payload === 'undefined' ? { type } : { type, payload };
}

export function createAction(type) {
  console.log(type, '#############################')
  return payload => action(type, payload);
}

/* eslint no-unused-vars: "off"*/
export function createRequestTypes(base) {
  console.log(base, 'oooooooooooooooppppppppppppppppp')
  const res = {};
  [REQUEST, SUCCESS, FAILURE].forEach(type => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export function createActionsFromTypes(actionTypes) {
  console.log(actionTypes, '+++++++++++++++++++++++++++++++++')
  const res = {};
  Reflect.ownKeys(actionTypes).forEach(type => {
    res[type.toLowerCase()] = createAction(actionTypes[type]);
  });
  return res;
}

// generators CRUD action types
export function createCrudTypes(base) {
  const res = {};
  [CREATE, READ, UPDATE, DELETE].forEach(type => {
    res[type] = createRequestTypes(`${base}_${type}`);
  });
  return res;
}

// generates CRUD action creators:
export function createCrudActions(actionTypes) {
  const res = {};
  Reflect.ownKeys(actionTypes).forEach(type => {
    res[type.toLowerCase()] = {};
    Reflect.ownKeys(actionTypes[type]).forEach(item => {
      res[type.toLowerCase()][item.toLowerCase()] = createAction(actionTypes[type][item]);
    });
  });
  return res;
}
