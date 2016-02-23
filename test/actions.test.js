/* global describe */
/* global it */
/* global afterEach */

import { expect } from 'chai';

import * as actions from '../app/actions/index.js';
import * as types from '../app/constants/ActionTypes';

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