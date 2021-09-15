<script lang="ts">
    // import Fader from './fader/Fader.svelte'
    import Blind from './blind/Blind.svelte'
    import Items from './items/Items.svelte'
    // import Brand from './brand/Brand.svelte'
    let mouseInside: boolean = false
</script>

<aside
    class="aside"
    class:hover={mouseInside}
    on:mouseenter={() => mouseInside = true}
    on:mouseleave={() => mouseInside = false}
>
    <!-- <Fader /> -->
    <!-- <Blind asideMouseHover={mouseInside}/> -->
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
        // background-color: var(--aside-bg-color)
        z-index: 100
        // transform: translateX(-13rem)
        // transition: all .25s ease-out
        // &:hover
        //     transform: translateX(0rem)
        //     width: calc(var(--layout-aside-width) * 8)
        :global(.blind)
            transform: translateX(-13rem)
            transition: all 0.25s
        :global(.items)
            transform: translateX(-13rem)
            transition: all 0.25s
            :global(.item)
                transform: translateX(13rem)
                transition: all 0.25s
        &:hover
            :global(.blind)
                transform: translateX(0rem)
            :global(.items)
                transform: translateX(0rem)
                :global(.item)
                    transform: translateX(0rem)
</style>