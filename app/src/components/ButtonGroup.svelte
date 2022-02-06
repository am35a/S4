<script lang="ts">

</script>

<div
    class:btn-group={true}
    {...$$restProps}
>
    <slot></slot>
</div>

<style lang="sass">
    .btn-group
        display: inline-flex
        > :global(.btn:first-child)
            border-top-right-radius: 0
            border-bottom-right-radius: 0
        > :global(.btn:not(:first-child):not(:last-child))
            border-radius: 0
        > :global(.btn:last-child)
            border-top-left-radius: 0
            border-bottom-left-radius: 0
        > :global(.btn:focus),
          :global(.btn:hover),
          :global(.btn:active:not(:disabled))
            z-index: 1
</style>