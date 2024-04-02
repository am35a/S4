<script>
    import SectionOutside from './outside/Outside.svelte'
    import SectionInside from './inside/Inside.svelte'
    // import SectionListItem from './listitem/ListItem.svelte'
    import SectionLegacy from './legacy/Legacy.svelte'
    // import SectionGlobal from './global/Global.svelte'
    import SectionBox from './box/Box.svelte'

    import AnchorNavigation from 'src/lib/layout/components/AnchorNavigation.svelte'
</script>

<script context="module">
    export const anchorsObj = {
        headAnchorObg: {
            display: 'Display'
        },
        subAnchorsObj: {
            outside: 'Outside',
            inside: 'Inside',
            legacy: 'Legacy',
            box: 'Box'
        }
	}
</script>

<article>
    <h2 id={Object.keys(anchorsObj.headAnchorObg)}>
        {Object.values(anchorsObj.headAnchorObg)}
    </h2>
    <SectionOutside />
    <SectionInside />
    <!-- <SectionListItem /> -->
    <SectionLegacy />
    <!-- <SectionGlobal /> -->
    <SectionBox />

    <div class="position--sticky bottom--0 padding--xs">
        <AnchorNavigation anchorsObj={anchorsObj.subAnchorsObj} />
    </div>
</article>