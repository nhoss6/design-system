<template>
	<div class="doc-roadmap w-100">
		<VSheet
			outlined
			rounded
			class="mb-8"
		>
			<VListItem class="px-4">
				<VListItemAvatar class="d-none d-sm-inline-flex">
					<VIcon
						color="primary"
						x-large
					>
						{{ tagIcon }}
					</VIcon>
				</VListItemAvatar>

				<VListItemContent>
					<VListItemTitle class="mb-1">
						Version 2.x
					</VListItemTitle>

					<VListItemSubtitle>
						La version 2 du Design System est en maintenance jusqu’à fin 2023.
					</VListItemSubtitle>
				</VListItemContent>
			</VListItem>
		</VSheet>

		<VSheet
			outlined
			rounded
			class="mb-8"
		>
			<VListItem class="px-4">
				<VListItemAvatar class="d-none d-sm-inline-flex">
					<VIcon
						color="primary"
						x-large
					>
						{{ tagIcon }}
					</VIcon>
				</VListItemAvatar>

				<VListItemContent>
					<VListItemTitle class="mb-1">
						Version 2.0.0-bridge.x
					</VListItemTitle>

					<VListItemSubtitle>
						La version Bridge du Design System est en cours de développement et permettra de migrer sur Vue 3 sans changements sur les composants.
					</VListItemSubtitle>
				</VListItemContent>
			</VListItem>
		</VSheet>

		<VSheet
			outlined
			rounded
		>
			<VListItem
				href="https://github.com/orgs/assurance-maladie-digital/projects/4/views/2"
				target="_blank"
				rel="noopener noreferrer"
				class="px-4"
			>
				<VListItemAvatar class="d-none d-sm-inline-flex">
					<VIcon
						color="primary"
						x-large
					>
						{{ tagHiddenIcon }}
					</VIcon>
				</VListItemAvatar>

				<VListItemContent>
					<VListItemTitle>
						Version 3.0
					</VListItemTitle>

					<VListItemSubtitle>
						La version 3 du Design System est en cours de conception et son développement commencera fin 2023.
					</VListItemSubtitle>
				</VListItemContent>

				<VIcon class="ml-4">
					{{ newTabIcon }}
				</VIcon>
			</VListItem>
		</VSheet>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiOpenInNew, mdiTagOutline, mdiTagHidden } from '@mdi/js';

	@Component
	export default class DocRoadmap extends Vue {
		newTabIcon = mdiOpenInNew;
		tagIcon = mdiTagOutline;
		tagHiddenIcon = mdiTagHidden;
	}
</script>

<style lang="scss" scoped>
	.v-list-item__subtitle {
		white-space: normal;
	}
</style>
