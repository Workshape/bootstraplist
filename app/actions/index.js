import * as types from '../constants/ActionTypes';
import request from 'superagent';

const serverUrl = '';
const subscriptionsUrl = `${serverUrl}/api/0/subscriptions`;
const companiesUrl = `${serverUrl}/api/0/companies`;

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


export function addCompany(company) {
  console.log('Add company', company);
  return dispatch => {
    dispatch(addCompanyRequest(company));

    return request
      .post(companiesUrl)
      .send(company)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          dispatch(addCompanyFailure(err, company));
        } else {
          dispatch(addCompanySuccess(res.body));
        }
      });
  };
}

export function addCompanyRequest(company) {
  return {
    type: types.ADD_COMPANY_REQUEST,
    company
  };
}

export function addCompanySuccess(company) {
  return {
    type: types.ADD_COMPANY_SUCCESS,
    company
  };
}

export function addCompanyFailure(error, company) {
  return {
    type: types.ADD_COMPANY_FAILURE,
    error
  };
}

export function incrementSubscriptionCount() {
  return {
    type: types.INCREMENT_SUBSCRIPTION_COUNT,
  };
}