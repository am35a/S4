<script lang="ts">
</script>

<div
    class:grp={true}
    {...$$restProps}
><slot></slot></div>

<style lang="sass" global>
.grp
    display: inline-grid
    // grid-gap: var(--size-1)
    &[class*=grid-auto-flow--column]
        > :first-child
            border-top-right-radius: 0
            border-bottom-right-radius: 0
        > :not(:first-child):not(:last-child)
            border-radius: 0
        > :last-child
            border-top-left-radius: 0
            border-bottom-left-radius: 0
    &[class*=grid-auto-flow--row]
        > :first-child
            border-bottom-left-radius: 0
            border-bottom-right-radius: 0
        > :not(:first-child):not(:last-child)
            border-radius: 0
        > :last-child
            border-top-left-radius: 0
            border-top-right-radius: 0
</style>