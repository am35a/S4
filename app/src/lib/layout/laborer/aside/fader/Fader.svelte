<script lang="ts">
    import Icon from '../../../../../components/Icon.svelte'
</script>

<div class="fader">
    <div class="close">
        <Icon name="close-o" size="lg"/>
    </div>
</div>

<style lang="sass">
    .fader
        position: absolute
        display: grid
        width: 100%
        height: 100%
        background-color: hsl(0, 0%, 0%, .75)
        z-index: -1
        .close
            display: grid
            justify-items: center
            align-items: center
            width: var(--layout-header-height)
            height: var(--layout-header-height)
            margin: 0 0 auto auto
            color: var(--positive-color)
</style>