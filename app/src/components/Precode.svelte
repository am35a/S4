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
        border-radius: var(--border-radius--md)
        &:not(.inline)
            display: grid
            padding: 1em
            code
                overflow: auto
        &.inline
            display: inline-grid
            padding-left: .25em
            padding-right: .25em
</style>