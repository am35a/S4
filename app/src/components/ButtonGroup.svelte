<script lang="ts">

</script>

<div
    class:btn-group={true}
    {...$$restProps}
>
    <slot></slot>
</div>

<style lang="sass" global>
    .btn-group
        display: inline-flex
        gap: var(--size-1)
        > .btn:first-child
            border-top-right-radius: 0
            border-bottom-right-radius: 0
        > .btn:not(:first-child):not(:last-child)
            border-radius: 0
        > .btn:last-child
            border-top-left-radius: 0
            border-bottom-left-radius: 0
        // > .btn:focus,
        // .btn:hover,
        // .btn:active:not(:disabled)
        //     z-index: 1
</style>