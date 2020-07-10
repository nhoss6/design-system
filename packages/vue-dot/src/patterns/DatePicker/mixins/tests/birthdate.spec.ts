import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import dayjs from 'dayjs';

import { Refs } from '../../../../types';

import { Birthdate } from '../birthdate';

// Tell jest to mock all timeout functions
jest.useFakeTimers();

interface TestComponent extends Vue {
	// Extend $refs
	$refs: Refs<{
		picker: {
			activePicker: string;
		};
	}>;

	birthdate?: string | boolean;
	max: string | null;
	min: string | null;
	menu: boolean;
	setActivePicker: () => void;
}

/** Create fake VDatePicker for refs */
function createDatePicker() {
	return Vue.component('v-date-picker', {
		data() {
			return {
				activePicker: ''
			};
		},
		template: '<div />'
	});
}

/** Create the wrapper */
function createWrapper(birthdateValue: boolean, spy?: jest.Mock, menu = true) {
	const component = Vue.component('test', {
		mixins: [
			Birthdate
		],
		watch: {
			menu: spy ? spy : () => null
		},
		template: '<div><v-date-picker ref="picker" /></div>'
	});

	return mount(component, {
		propsData: {
			birthdate: birthdateValue
		},
		data() {
			return {
				menu
			};
		},
		stubs: {
			datePicker: createDatePicker()
		}
	}) as Wrapper<TestComponent>;
}

// Tests
describe('Birthdate', () => {
	it('doesn\'t set max & min values when birthdate is false', () => {
		const wrapper = createWrapper(false);

		expect(wrapper.vm.max).toBe(null);
		expect(wrapper.vm.min).toBe(null);
	});

	it('sets the min value to 01/01/1900 when birthdate is true', () => {
		const wrapper = createWrapper(true);

		expect(wrapper.vm.min).toBe('1900-01-01');
	});

	it('sets the max value to today when birthdate is true', () => {
		const wrapper = createWrapper(true);

		expect(wrapper.vm.max).toBe(dayjs().format('YYYY-MM-DD'));
	});

	it('calls setActivePicker in watch when menu goes from false to true', async() => {
		const spy = jest.fn();
		const wrapper = createWrapper(true, spy, false);

		wrapper.vm.menu = true;

		await wrapper.vm.$nextTick();

		expect(spy).toHaveBeenCalled();
	});

	it('calls setActivePicker in watch when menu goes from true to false', async() => {
		const spy = jest.fn();
		const wrapper = createWrapper(true, spy, true);

		wrapper.vm.menu = false;

		await wrapper.vm.$nextTick();

		expect(spy).toHaveBeenCalled();
	});

	it('updates the active picker when setActivePicker is called', () => {
		const wrapper = createWrapper(true);

		wrapper.vm.setActivePicker();

		// Fast-forward time
		jest.runAllTimers();

		expect(wrapper.vm.$refs.picker.activePicker).toBe('YEAR');
	});
});