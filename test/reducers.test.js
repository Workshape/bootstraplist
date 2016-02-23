/* jshint expr: true */
/* global describe, it */

import 'babel-polyfill'; // For use of Object.assign

import chai from 'chai';

var expect = chai.expect;

import reducer from '../app/reducers';
import * as actions from '../app/actions/index.js';

describe('Reducers', () => {

  /**
   * Example of writing a test on a reducing functiom
   */
  describe('incrementSubscriptionCount', () => {
    it('should increment subscription count by 1', () => {
      let initialStateForTest = { subscriptionCount: 3 },
        action = actions.incrementSubscriptionCount();

      expect(initialStateForTest.subscriptionCount).to.equal(3);

      reducer(initialStateForTest, action);
      expect(initialStateForTest.subscriptionCount).to.equal(4);
    });
  });

  describe('addSubscription', () => {
    describe('request', () => {
      it('should set isWorking to true', () => {
        let initialStateForTest = { isWorking: false };
        let action = actions.addSubscriptionRequest();

        expect(initialStateForTest.isWorking).to.be.false;

        let state = reducer(initialStateForTest, action);
        expect(state.isWorking).to.be.true;
      });
    });

    describe('success', () => {
      it('should set isWorking to false and add event to events', () => {
        let initialStateForTest = { isWorking: true, subscribed: false };
        let event = { id: 25, email: 'g@g.com', name: 'G G' };

        let action = actions.addSubscriptionSuccess(event);

        expect(initialStateForTest.isWorking).to.be.true;
        expect(initialStateForTest.subscribed).to.be.false;


        let state = reducer(initialStateForTest, action);
        expect(state.isWorking).to.be.false;
        expect(state.subscribed).to.be.true;
      });
    });

    describe('failure', () => {
      it('should set isWorking to false and error and not change events', () => {
        let initialStateForTest = { isWorking: true, subscribed: false, error: null };
        let error = 'some error';

        let action = actions.addSubscriptionFailure(error);

        expect(initialStateForTest.isWorking).to.be.true;
        expect(initialStateForTest.error).to.be.null;
        expect(initialStateForTest.subscribed).to.be.false;


        let state = reducer(initialStateForTest, action);
        expect(state.isWorking).to.be.false;
        expect(state.error).to.equal(error);
        expect(state.subscribed).to.be.false;
      });
    });
  });
});