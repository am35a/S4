<script lang="ts">
    // export let asideMouseHover = false
</script>

<div class="blind"></div>
<!-- class:expand={asideMouseHover} -->

<style lang="sass">
    .blind
        grid-column: 1/-1
        grid-row: 1/3
        width: 16rem
        background-color: var(--aside-bg-color, var(--secondary-color-d))
        // transform: translateX(-13rem)
        // transition: all 0.25s
        // &.expand
        //     background-color: red
        //     transform: translateX(0rem)            
</style>