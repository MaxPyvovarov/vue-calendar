export default {
	editor: {
		label: {
			en: 'Vue-calendar',
		},
	},
	properties: {
		events: {
			label: {en: 'Events'},
			type: 'Array',
			bindable: true,
			options: {
				item: {
					type: 'Object',
					defaultValue: {
						startDate: null,
						endDate: null,
						title: null,
						content: null,
						calendar: null,
					},
					options: {
						item: {
							start: {
								label: {en: 'Start date'},
								placeholder: '2024-01-01 12:00',
								type: 'Text',
							},
							end: {
								label: {en: 'End date'},
								placeholder: '2024-01-01 14:00',
								type: 'Text',
							},
							title: {
								label: {en: 'Title'},
								type: 'Text',
							},
							content: {
								label: {en: 'Content'},
								type: 'Text',
							},
							allDay: {
								label: {en: 'All day'},
								type: 'OnOff',
							},
							category: {
								label: {en: 'Category name'},
								type: 'Text',
							},
						},
					},
				},
			},
		},
	},
	triggerEvents: [
		{
			name: 'event:click',
			label: {en: 'On event click'},
			event: {
				rawEventData: {},
				event: {
					start: '',
					end: '',
					title: '',
					content: '',
					calendar: null,
					allDay: null,
				},
				currentView: 'years | year | month | week | day',
				domEvent: {},
			},
			default: true,
			getTestEvent: 'getTestEvent',
		},
		{
			name: 'cell:click',
			label: {en: 'On cell click'},
			event: {
				cell: {
					date: new Date(),
				},
				currentView: 'years | year | month | week | day',
			},
		},
	],
};
