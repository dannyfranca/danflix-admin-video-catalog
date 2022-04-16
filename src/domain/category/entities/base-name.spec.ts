import { executeNameTest } from '@/@shared/value-objects/base-name.test-factory';
import { Name } from './name.vo';

executeNameTest({
  class: Name,
  valid: 'Category',
  invalidMin: 'Ca',
  invalidMax: 'Extremely Big Length Category Name',
});
