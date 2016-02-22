import * as types from '../constants/ActionTypes';
import request from 'superagent';

const serverUrl = '';
const subscriptionsUrl = `${serverUrl}/api/0/subscriptions`;

export function addSubscription(subscription) {
  console.log('Subscribe', subscription);
  return dispatch => {
    dispatch(addSubscriptionRequest(subscription));

    return request
      .post(subscriptionsUrl)
      .send(subscription)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          dispatch(addSubscriptionFailure(err, subscription));
        } else {
          dispatch(addSubscriptionSuccess(res.body));
        }
      });
  };
}

export function addSubscriptionRequest(subscription) {
  return {
    type: types.ADD_SUBSCRIPTION_REQUEST,
    subscription
  };
}

export function addSubscriptionSuccess(subscription) {
  return {
    type: types.ADD_SUBSCRIPTION_SUCCESS,
    subscription
  };
}

export function addSubscriptionFailure(error, subscription) {
  return {
    type: types.ADD_SUBSCRIPTION_FAILURE,
    error
  };
}

export function incrementSubscriptionCount() {
  return {
    type: types.INCREMENT_SUBSCRIPTION_COUNT,
  };
}