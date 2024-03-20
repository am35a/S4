<script>
    import SectionDisplay from './display/Display.svelte'
    import SectionDirection from './direction/Direction.svelte'
    import SectionWrap from './wrap/Wrap.svelte'
    import SectionFlex from './flex/Flex.svelte'

    import AnchorNavigation from 'src/lib/layout/components/AnchorNavigation.svelte'
</script>

<script context="module">
    export const anchorsObj = {
        headAnchorObg: {
            flex: 'Flex'
        },
        subAnchorsObj: {
            display: 'Display',
            direction: 'Direction',
            wrap: 'Wrap',
            defines: 'Defines',
            grow: 'Grow',
            shrink: 'Shrink',
            basis: 'Basis'
        }
	}
</script>

<article>
    <h2 id={Object.keys(anchorsObj.headAnchorObg)}>
        {Object.values(anchorsObj.headAnchorObg)}
    </h2>

    <SectionDisplay />
    <SectionDirection />
    <SectionWrap />
    <SectionFlex />

    <div class="position--sticky b-0 p-2">
        <AnchorNavigation anchorsObj={anchorsObj.subAnchorsObj} />
    </div>
</article>