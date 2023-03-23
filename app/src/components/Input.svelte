<script lang="ts">
    export let value: string = ''


</script>

<input
    {value}
    class:frm = {true}
    {...$$restProps}
/>

<!--style lang="sass" global>
    [type='text'].frm
        display: inline-grid
        margin: unset
        padding: var(--size-1) var(--size-3)
        background-color: var(--positive-color-10)
        border: none
        border-radius: var(--size-1)
        color: currentColor
        line-height: var(--lh)
        outline-width: 1px
        outline-style: solid
        outline-color: transparent
        outline-offset: -1px
        &-alt
            background-color: var(--negative-color-10)
        &-outline
            outline-color: var(--negative-color-10)
            outline-offset: -1px

</style-->