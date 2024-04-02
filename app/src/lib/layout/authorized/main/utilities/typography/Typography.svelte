<script>
    import SectionFont from './font/Font.svelte'
    import SectionLineHeight from './lineheight/Lineheight.svelte'
    import SectionWhiteSpace from './whitespace/Whitespace.svelte'
    import SectionTransform from './transform/Transform.svelte'
    import SectionHeadings from './headings/Headings.svelte'
    import SectionColors from './colors/Colors.svelte'
    import SectionWritingMode from './writingmode/WritingMode.svelte'
    import SectionDirection from './directions/Directions.svelte'

    import AnchorNavigation from 'src/lib/layout/components/AnchorNavigation.svelte'
</script>

<script context="module">
    export const anchorsObj = {
        headAnchorObg: {
            typography: 'Typography'
        },
        subAnchorsObj: {
            font: 'Font',
            lineHeight: 'Line Height',
            whiteSpace: 'White Space',
            headings: 'Headings',
            transform: 'Transform',
            colors: 'Colors',
            direction: 'Direction',
            writingMode: 'Writing Mode'
        }
	}
</script>

<article>
    <h2 id={Object.keys(anchorsObj.headAnchorObg)}>
        {Object.values(anchorsObj.headAnchorObg)}
    </h2>
    <SectionFont />
    <SectionLineHeight />
    <SectionWhiteSpace />
    <SectionHeadings />
    <SectionTransform />
    <SectionColors />
    <SectionDirection />
    <SectionWritingMode />
    
    <div class="position--sticky bottom--0 padding-bottom--xs">
        <AnchorNavigation anchorsObj={anchorsObj.subAnchorsObj} />
    </div>
</article>