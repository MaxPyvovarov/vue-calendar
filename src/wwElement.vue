<template>
	<VueCal
		style="height: 100%; width: 1000px"
		:time="false"
		hide-weekends
		active-view="month"
		:disable-views="['years', 'year', 'day']"
		events-on-month-view="short"
		:events="events"
		@cell-click="handleCellClick"
		@event-click="handleEventClick"
	/>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

export default {
	components: {VueCal},
	props: {
		content: {type: Object, required: true},
	},
	emits: ['trigger-event'],
	computed: {
		events() {
			return this.content.events;
		},
	},
	methods: {
		handleEventClick(event, domEvent) {
			this.$emit('trigger-event', {
				name: 'event:click',
				event: {
					rawEventData: event.rawEventData,
					event: {
						start: event.start,
						end: event.end,
						title: event.title,
						content: event.content,
						calendar: event.split,
						allDay: event.allDay,
					},
					currentView: this.currentView,
					domEvent,
				},
			});
		},
		handleCellClick(event) {
			const date = 'date' in event ? event.date : event;
			const calendar = 'split' in event ? event.split : null;
			this.$emit('trigger-event', {
				name: 'cell:click',
				event: {
					cell: {date, calendar},
					currentView: this.currentView,
				},
			});
		},

		/* wwEditor:start */
		getTestEvent() {
			if (!this.events.length) throw new Error('No event found');
			return {
				rawEventData: this.events[0].rawEventData,
				event: {
					start: this.events[0].start,
					end: this.events[0].end,
					title: this.events[0].title,
					content: this.events[0].content,
					calendar: this.events[0].split,
					allDay: this.events[0].allDay,
				},
				currentView: this.currentView,
				domEvent: {},
			};
		},
		/* wwEditor:end */
	},
};
</script>

<style>
.vuecal__flex.vuecal__cells.month-view {
	overflow: hidden;
}

.vuecal--month-view .vuecal__cell {
	height: 80px;
}

.vuecal--month-view .vuecal__cell-content {
	justify-content: flex-start;
	height: 100%;
	align-items: center;
}

.vuecal--month-view .vuecal__cell-date {
	padding: 4px;
}
.vuecal--month-view .vuecal__no-event {
	display: none;
}

.vuecal__cell-events .vuecal__event {
	background-color: #002952;
	border: 1px solid #002952;
	color: #fff;
}

.vuecal--short-events .vuecal__event-title {
	text-align: center;
}
</style>
