<script lang="ts">
    export let inline: boolean = false
</script>

<pre
    class:inline={inline}
    {...$$restProps}
><code><slot></slot></code></pre>

<style lang="sass">

    pre
        background-color: var(--negative-color)
        color: var(--success-color)
        font-size: var(--fs-md)
        border-radius: var(--rounded-2, calc(var(--key-size) * .25))
        &:not(.inline)
            display: block grid
            padding: var(--key-size)
        &.inline
            display: inline grid
            padding-left: calc(var(--key-size) * .25)
            padding-right: calc(var(--key-size) * .25)
</style>