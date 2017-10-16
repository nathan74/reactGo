import { combineReducers } from 'redux';
import * as types from '../types';

const topic = (
  state = {},
  action
) => {
  switch (action.type) {
    case types.CREATE_TOPIC_REQUEST:
      return {
        id: action.id,
        count: action.count,
        text: action.text
      };
    default:
      return state;
  }
};

const topics = (
  state = [],
  action
) => {
  switch (action.type) {
    case types.REQUEST_SUCCESS:
      if (action.data) return action.data;
      return state;
    case types.CREATE_TOPIC_REQUEST:
      return [...state, topic(undefined, action)];
    case types.CREATE_TOPIC_FAILURE:
      return state.filter(t => t.id !== action.id);
    default:
      return state;
  }
};

const newTopic = (
  state = '',
  action
) => {
  switch (action.type) {
    case types.TYPING:
      return action.newTopic;
    case types.CREATE_TOPIC_REQUEST:
      return '';
    default:
      return state;
  }
};

const topicReducer = combineReducers({
  topics,
  newTopic
});

export default topicReducer;
