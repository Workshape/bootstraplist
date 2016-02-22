/* global describe */
/* global it */
/* global afterEach */

import sinon from 'sinon';
import chai from 'chai';

var expect = chai.expect;

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../universal/actions/index.js';
import * as types from '../universal/constants/ActionTypes';

describe('Actions', () => {
  afterEach(function() {
    actions.__ResetDependency__('request');
  });

  /**
   * Example of writing a test on a syncronous action creator
   */
  describe('incrementSubscriptionCount', () => {
    it('should return action with type INCREMENT_SUBSCRIPTION_COUNT', () => {
      let action = actions.incrementSubscriptionCount();
      expect(action.type).to.equal(types.INCREMENT_SUBSCRIPTION_COUNT);
    });
  });
});