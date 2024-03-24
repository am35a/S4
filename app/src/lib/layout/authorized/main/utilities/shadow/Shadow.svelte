<script>
    import SectionSize from './size/Size.svelte'
    import SectionHover from './hover/Hover.svelte'

    import AnchorNavigation from 'src/lib/layout/components/AnchorNavigation.svelte'
</script>

<script context="module">
    export const anchorsObj = {
        headAnchorObg: {
            shadow: 'Shadow'
        },
        subAnchorsObj: {
            size: 'Size',
            hover: 'Hover'
        }
	}
</script>

<article>
    <h2 id={Object.keys(anchorsObj.headAnchorObg)}>
        {Object.values(anchorsObj.headAnchorObg)}
    </h2>
    <SectionSize />
    <SectionHover />

    <div class="position--sticky bottom--0 p-2">
        <AnchorNavigation anchorsObj={anchorsObj.subAnchorsObj} />
    </div>    
</article>