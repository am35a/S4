<script lang="ts">
    export let value: string = ''

    if($$restProps.type)
        console.log($$restProps.type)

</script>

<input
    bind:value
    class:frm = {true}
    {...$$restProps}
/>

<style lang="sass" global>
    [type='text'].frm
        display: inline-grid
        margin: unset
        min-width: 0
        padding: var(--size-1) var(--size-3)
        background-color: var(--positive-color)
        border: none
        border-radius: var(--size-1)
        color: currentColor
        line-height: var(--lh)
        outline-width: 0
        outline-style: solid
        outline-color: transparent
        outline-offset: 0
        &:disabled
            color: var(--negative-color-20)
            cursor: not-allowed
        &:focus,
        &:not(:disabled):hover,
        &.active
            outline-width: calc(var(--size-1) / 2)
            outline-style: solid
            outline-color: var(--negative-color-20)
            outline-offset: calc(var(--size-1) / 4)
        &.active:not(:disabled):not(:focus):hover,
        &.active:not(:disabled):focus
            outline-color: var(--negative-color-40)
        &-alt
            background-color: var(--negative-color-10)
        &-outline
            box-shadow: inset 0px 0px 0px calc(var(--size-1) / 4) currentColor

</style>