import {
  makeStubValidable,
  StubValidable,
  StubValidableByNotificationsArray,
  StubValidableByNotificationsObject,
} from './validable-test-utils';
import { makeValidableTests } from './validable-test.factory';

describe('Validable Unit Tests', () => {
  makeValidableTests(makeStubValidable(StubValidable));
  makeValidableTests(makeStubValidable(StubValidableByNotificationsObject));
  makeValidableTests(makeStubValidable(StubValidableByNotificationsArray));
});
