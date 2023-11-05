<script lang="ts">
    import { asideExpand } from 'src/store/store'

    import Icon from 'component/Icon.svelte'
</script>

<div
    on:click={() => $asideExpand = false}
    class="fader" aria-hidden="true" role="button"
>
    <div class="close">
        <Icon class="fs-xl" name="close-o"/>
    </div>
</div>

<style lang="sass" global>
    .fader
        display: none
        .mobile .expand &,
        .tablet .expand &
            position: absolute
            display: grid
            width: 100%
            height: 100%
            background-color: var(--negative-color-90)
            z-index: -1
        .close
            display: grid
            justify-items: center
            align-items: center
            width: var(--header-mh)
            height: var(--header-mh)
            margin: 0 0 auto auto
            color: var(--positive-color)
</style>