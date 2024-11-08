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
	
#planning .vuecal__flex.vuecal__cells.month-view {
	overflow: hidden;
}

#planning .vuecal__flex.vuecal {
	background: #F3F1ED !important;
	color: #173F35 !important;
}

#planning .vuecal--month-view .vuecal__flex .vuecal__cell {
	height: 90px;
}

#planning .vuecal--month-view .vuecal__cell-content {
	justify-content: flex-start;
	height: 105%;
	align-items: center;
}

#planning .vuecal--month-view .vuecal__cell-content .vuecal__cell-events {
	display: flex;
	flex-direction: column;
	gap: 2px;
}

#planning .vuecal__cell-content .vuecal__cell-events .vuecal__event {
	background-color: transparent;
	border: none;
	color: #fff;
	border-radius: 16px;
}

#planning .vuecal--month-view .vuecal__cell-date {
	padding: 4px;
}
#planning .vuecal--month-view .vuecal__no-event {
	display: none;
}

#planning .vuecal__cell-content .vuecal__cell-events .vuecal__event .vuecal__event-title {
	display: flex;
	align-items: center;
}

/* .vuecal__event .vuecal__event-title p:first-child,
.vuecal__event .vuecal__event-title p:last-child {
	color: #fff;
	font-weight: 700;
	background-color: #0b0052;
	padding: 3px 5px;
	border-radius: 23px;
}

.vuecal__event .vuecal__event-title p:first-child {
	padding: 3px 7px;
}

.vuecal__event .vuecal__event-title p:last-child {
	flex-grow: 1;
	text-align: center;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
} */
</style>
