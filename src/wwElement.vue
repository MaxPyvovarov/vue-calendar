<template>
	<VueCal
		style="height: 100%; width: 1000px"
		:time="false"
		hide-weekends
		active-view="month"
		:disable-views="['years', 'year', 'day']"
		events-on-month-view="short"
		:events="events"
		class="vuecal--blue-theme"
	/>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

export default {
	components: {VueCal},
	props: {
		content: {type: Object, required: true},
		wwElementState: {type: Object, required: true},
	},
	computed: {
		events() {
			return this.content.events;
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

.vuecal__event.project1 {
	background-color: #002952;
	border: 1px solid #002952;
	color: #fff;
}

.vuecal__event.project2 {
	background-color: #02488f;
	border: 1px solid #02488f;
	color: #fff;
}

.vuecal--short-events .vuecal__event-title {
	text-align: center;
}
</style>

<!-- <template>
	<div class="my-element">
		<p :style="textStyle">I am really a new component!</p>
	</div>
</template>

<script>
export default {
	props: {
		content: {type: Object, required: true},
	},
	computed: {
		textStyle() {
			return {
				color: this.content.textColor,
			};
		},
	},
};
</script>

<style lang="scss" scoped>
.my-element {
	p {
		font-size: 18px;
	}
}
</style> -->
