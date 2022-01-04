<script lang="ts">

</script>

<pre {...$$restProps}><code><slot></slot></code></pre>

<style lang="sass">
    pre
        display: inline grid
        padding: var(--key-size)
        background-color: var(--negative-color)
        color: var(--success-color)
        font-size: var(--fs-md)
        border-radius: var(--rounded-2, calc(var(--key-size) * .25))
</style>