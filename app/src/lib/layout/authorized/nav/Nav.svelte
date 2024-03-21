<script>
    import Segments from './segments/Segments.svelte'
</script>

<nav
    {...$$restProps}
>
    <Segments class="display--grid g-2 p-2 background-color--positive border-radius--md box-shadow--xs align-items--start border-style--solid border-color--negative-30" />
</nav>

<style lang="sass">
    nav
        display: grid
        grid-column: 1/-1
        grid-row: 1/-1
</style>