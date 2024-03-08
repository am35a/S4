<script>
    import Segments from './segments/Segments.svelte'
</script>

<nav
    {...$$restProps}
>
    <Segments class="d-grid g-2 p-2 background-color--positive br-md bs-xs align-items--start border border-negative-30" />
</nav>

<style lang="sass">
    nav
        display: grid
        grid-column: 1/-1
        grid-row: 1/-1
</style>