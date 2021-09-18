<script lang="ts">
    import { app } from 'src/store/store'
    import Fader from './fader/Fader.svelte'
    import Blind from './blind/Blind.svelte'
    import Items from './items/Items.svelte'
    // import Brand from './brand/Brand.svelte'
    // let expandContent: boolean = false
</script>

<aside
    class="aside"
    class:expand={$app.isAsideExpand}
    on:mouseenter={() => $app.isAsideExpand = true}
    on:mouseleave={() => $app.isAsideExpand = false}
>
    <Fader/>
    <!-- <Blind asideMouseHover={expandContent}/> -->
    <Blind/>
    <Items/>
    <!-- <Brand/> -->
</aside>

<style lang="sass">
    .aside
        grid-column: 1/2
        grid-row: 1/3
        display: grid
        grid-template-rows: auto max-content
        width: var(--layout-aside-width)
        z-index: 100
        :global(.blind)
            transform: translateX(calc(calc(var(--layout-aside-expand-width) - var(--layout-aside-width)) * -1))
            transition: all 0.25s
        :global(.items)
            transform: translateX(calc(calc(var(--layout-aside-expand-width) - var(--layout-aside-width)) * -1))
            transition: all 0.25s
            :global(.item)
                transform: translateX(calc(var(--layout-aside-expand-width) - var(--layout-aside-width)))
                transition: all 0.25s
        &.expand
            :global(.blind)
                transform: translateX(0rem)
            :global(.items)
                transform: translateX(0rem)
                :global(.item)
                    transform: translateX(0rem)
</style>