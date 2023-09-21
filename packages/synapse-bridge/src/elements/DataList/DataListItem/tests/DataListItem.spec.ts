import { VueWrapper, shallowMount } from "@vue/test-utils";

import DataListItem from "../";

let wrapper: VueWrapper<any>;

describe("DataListItem", () => {
	it("renders correctly", () => {
		wrapper = shallowMount(DataListItem, {
			propsData: {
				label: "Test",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with a value", () => {
		wrapper = shallowMount(DataListItem, {
			propsData: {
				label: "Test",
				value: "value",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly a value with HTML as text", () => {
		wrapper = shallowMount(DataListItem, {
			propsData: {
				label: "Name",
				value: "Paul<br> Dupont",
			},
		});

		const elValue = wrapper.find(".vd-data-list-item-value span");
		expect(elValue.text()).toBe("Paul<br> Dupont");
	});

	it("renders correctly a value as plain HTML", () => {
		wrapper = shallowMount(DataListItem, {
			propsData: {
				label: "Name",
				value: "Paul<br> Dupont",
				renderHtmlValue: true,
			},
		});

		const elValue = wrapper.find(".vd-data-list-item-value span");
		expect(elValue.text()).toBe("Paul Dupont");
	});

	it("renders correctly value in a chip", () => {
		wrapper = shallowMount(DataListItem, {
			propsData: {
				label: "Test",
				value: "value",
				chip: true,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with an action", () => {
		wrapper = shallowMount(DataListItem, {
			propsData: {
				label: "Test",
				action: "action",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("emits click:action event when the action button is pressed", async () => {
		wrapper = shallowMount(
			DataListItem,
			{
				propsData: {
					label: "Test",
					value: "value",
					action: "Action",
				},
			},
			true
		);

		const actionBtn = wrapper.find(".vd-data-list-item-action-btn");
		expect(actionBtn.exists()).toBe(true);

		actionBtn.trigger("click");

		await wrapper.vm.$nextTick();

		expect(wrapper.emitted("click:action")).toBeTruthy();
	});

	it("renders correctly in row mode", () => {
		wrapper = shallowMount(DataListItem, {
			propsData: {
				label: "Test",
				value: "value",
				action: "Action",
				row: true,
			},
		});

		const elExists = wrapper.find(".vd-row").exists();
		expect(elExists).toBe(true);

		expect(wrapper).toMatchSnapshot();
	});
});
