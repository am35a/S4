<script lang="ts">
    import { asideExpand } from 'src/store/store'
    import Fader from './fader/Fader.svelte'
    import Blind from './blind/Blind.svelte'
    import Items from './items/Items.svelte'
    import Brand from './brand/Brand.svelte'
    // let expandContent: boolean = false
</script>

<aside
    class="aside"
    class:expand={$asideExpand}
    on:mouseenter={() => $asideExpand = true}
    on:mouseleave={() => $asideExpand = false}
>
    <Fader/>
    <!-- <Blind asideMouseHover={expandContent}/> -->
    <Blind/>
    <Items/>
    <Brand/>
</aside>

<style lang="sass" global>
    .aside
        grid-column: 1/2
        grid-row: 1/3
        display: grid
        grid-template-rows: auto max-content
        width: var(--layout-aside-width)
        color: var(--aside-color, var(--positive-color-80))
        z-index: 100
        .blind
            transform: translateX(calc(calc(var(--layout-aside-expand-width) - var(--layout-aside-width)) * -1))
            transition: all 0.25s
        .brand
            transform: translateX(calc(calc(var(--layout-aside-expand-width) - var(--layout-aside-width)) * -1))
            transition: all 0.25s
        .items,
        .submenu
            transform: translateX(calc(calc(var(--layout-aside-expand-width) - var(--layout-aside-width)) * -1))
            transition: all 0.25s
            .item
                transform: translateX(calc(var(--layout-aside-expand-width) - var(--layout-aside-width)))
                transition: all 0.25s
        &.expand
            .blind
                transform: translateX(0rem)
            .brand
                transform: translateX(0rem)
            .items,
            .submenu
                transform: translateX(0rem)
                .item
                    transform: translateX(0rem)
</style>