<script lang="ts">
    import Fader from './fader/Fader.svelte'
    import Items from './items/Items.svelte'
    import Brand from './brand/Brand.svelte'
</script>

<aside class="aside">
    <Fader />
    <Items />
    <Brand />
</aside>

<style lang="sass">
    .aside
        grid-column: 1/2
        grid-row: 1/3
        display: grid
        grid-template-rows: auto max-content
        width: 16rem //var(--layout-aside-width)
        background-color: var(--aside-bg-color)
        z-index: 100
        // &:hover
        //     width: calc(var(--layout-aside-width) * 8)
</style>