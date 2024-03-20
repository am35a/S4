<script lang="ts">
    export let inline: boolean = false
</script>

<pre
    class:inline={inline}
    {...$$restProps}
><code><slot></slot></code></pre>

<style lang="sass" global>
    pre
        background-color: var(--negative-color)
        border-radius: var(--border-radius--md)
        color: var(--success-color)
        font-size: var(--fs-md)
        text-wrap: unset
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