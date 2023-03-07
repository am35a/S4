<script lang="ts">

</script>

<!-- class:btn-group={true} -->
<div
    {...$$restProps}
>
    <slot></slot>
</div>

<style lang="sass" global>
    .btns-h
        display: inline-flex
        gap: var(--size-1)
        flex-direction: row
        vertical-align: middle
        > .btn:first-child
            border-top-right-radius: 0
            border-bottom-right-radius: 0
        > .btn:not(:first-child):not(:last-child)
            border-radius: 0
        > .btn:last-child
            border-top-left-radius: 0
            border-bottom-left-radius: 0

    .btns-v
        display: inline-grid
        gap: var(--size-1)
        align-items: flex-start
        justify-content: center
        > .btn:first-child
            border-bottom-left-radius: 0
            border-bottom-right-radius: 0
        > .btn:not(:first-child):not(:last-child)
            border-radius: 0
        > .btn:last-child
            border-top-left-radius: 0
            border-top-right-radius: 0
</style>