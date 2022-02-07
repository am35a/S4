<script lang="ts">
    import { asideExpand } from 'src/store/store'

    import Icon from 'src/components/Icon.svelte'
</script>

<div
    on:click={() => $asideExpand = false}
    class="fader"
>
    <div class="close">
        <Icon name="close-o" size="lg"/>
    </div>
</div>

<style lang="sass" global>
    .fader
        position: absolute
        display: none
        width: 100%
        height: 100%
        background-color: var(--negative-color-50)
        z-index: -1
        .mobile .expand &,
        .tablet .expand &
            display: grid
        .close
            display: grid
            justify-items: center
            align-items: center
            width: var(--layout-header-height)
            height: var(--layout-header-height)
            margin: 0 0 auto auto
            color: var(--positive-color)
</style>