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
			debugger;
			console.log(event, domEvent);
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
			debugger;
			console.log(event);
			this.$emit('trigger-event', {
				name: 'cell:click',
				event: {
					cell: {event},
					currentView: this.currentView,
				},
			});
		},
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
