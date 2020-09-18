import { formErrors, questionErrors, form } from './data/formErrors';

import { setFormErrors } from '../';

// Tests
describe('setFormErrors', () => {
	it('sets error messages on fields', () => {
		expect(setFormErrors(questionErrors, form)).toMatchSnapshot();
	});

	it('doesn\'t sets an error on unknown fields', () => {
		expect(setFormErrors(formErrors, form)).toMatchSnapshot();
	});
});