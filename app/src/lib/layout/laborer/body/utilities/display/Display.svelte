<script lang="ts">
    import SectionOutside from './outside/Outside.svelte'
    import SectionInside from './inside/Inside.svelte'
    // import SectionListItem from './listitem/ListItem.svelte'
    import SectionLegacy from './legacy/Legacy.svelte'
    import SectionGlobal from './global/Global.svelte'
    import SectionBox from './box/Box.svelte'

</script>

<article class="d-grid g-2">
    <h2 id="display">Display</h2>
    <SectionOutside />
    <SectionInside />
    <!-- <SectionListItem /> -->
    <SectionLegacy />
    <!-- <SectionGlobal /> -->
    <SectionBox />
</article>