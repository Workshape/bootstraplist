import { 
  ADD_SUBSCRIPTION_REQUEST, ADD_SUBSCRIPTION_SUCCESS, ADD_SUBSCRIPTION_FAILURE, INCREMENT_SUBSCRIPTION_COUNT
} from '../constants/ActionTypes';

const initialState = {
  isWorking: false,
  userId: null,
  error: null,
  subscribed: false,
  subscriptionCount: 0
};

export default (state = initialState, action)  => {
  switch (action.type) {
    case ADD_SUBSCRIPTION_REQUEST:
      return Object.assign({}, state, {
        isWorking: true,
        error: null
      });

    case ADD_SUBSCRIPTION_SUCCESS:
      return Object.assign({}, state, {
        isWorking: false,
        error: null,
        subscribed: true
      });

    case ADD_SUBSCRIPTION_FAILURE:
      return Object.assign({}, state, {
        isWorking: false,
        error: action.error,
      }); 

    case INCREMENT_SUBSCRIPTION_COUNT:
      return Object.assign({}, state, {
        subscriptionCount: state.subscriptionCount++
      });
    default:
      return state;
  }
};
