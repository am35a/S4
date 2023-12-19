<script lang="ts">
    import Segments from './segmentslist/Segments.svelte'
</script>

<nav
    {...$$restProps}
>
    <Segments class="d-grid g-2 p-2 bgc-positive br bs-xs ai-start border border-negative-30" />
</nav>

<style lang="sass">
    nav
        position: relative
        grid-column: 1/-1
        grid-row: 1/-1
</style>