<script lang="ts">
	import Header from "./header/index.svelte"
	import Aside from "./aside/index.svelte"
	import Body from "./body/Index.svelte"
</script>

<main class="laborer">
	<Header />
	<Aside />
	<Body />
</main>

<style lang="sass">
	.laborer
		grid-column: 1/-1
		grid-row: 1/-1
// .layout
//     display: grid
//     grid-template-columns: min-content 1fr
//     grid-template-rows: min-content 1fr
//     overflow: hidden
//     &-header
//         grid-row: 1/2
//         grid-column: 1/3
//         height: var(--layout-header-height)
//         align-items: center
//         background-color: var(--layout-header-background-color, var(--negative-color-10))

//         display: grid
//         grid-gap: var(--key-size)
//         grid-auto-flow: column
//         justify-content: start
//         grid-template-columns: min-content 1fr

//     &-aside
//         grid-row: 1/3
//         grid-column: 1/2

//         display: grid
//         grid-template-rows: 1fr max-content
        
//         width: var(--layout-aside-width)
//         max-height: 100vh
//         z-index: 1
//         .desktop &
//             width: var(--desktop-layout-aside-width)
//     &-main
//         grid-row: 2/3
//         grid-column: 2/3
//         position: relative
//         overflow: auto
//         // &:not(:empty) {
//         //     background-color: var(--positive-color);
//         // }
//         > :last-child
//             margin-bottom: var(--key-size)
//         &--fullscreen,
//         &.fullscreen-mode
//             grid-row: 1/-1
//             grid-column: 1/-1
//             background-color: var(--background-color)
//             z-index: 10
</style>