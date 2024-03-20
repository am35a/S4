<script>
    import SectionWidth from './width/Width.svelte'
    import SectionStyle from './style/Style.svelte'
    import SectionColor from './color/Color.svelte'
    import SectionRadius from './radius/Radius.svelte'
    import SectionSpacing from './spacing/Spacing.svelte'

    import AnchorNavigation from 'src/lib/layout/components/AnchorNavigation.svelte'
</script>

<script context="module">
    export const anchorsObj = {
        headAnchorObg: {
            border: 'Border'
        },
        subAnchorsObj: {
            width: 'Width',
            style: 'Style',
            color: 'Color',
            radius: 'Radius',
            spacing: 'Spacing'
        }
	}
</script>

<article>
    <h2 id={Object.keys(anchorsObj.headAnchorObg)}>
        {Object.values(anchorsObj.headAnchorObg)}
    </h2>
    <SectionWidth />
    <SectionStyle />
    <SectionColor />
    <SectionRadius />
    <SectionSpacing />

    <div class="position--sticky b-0 p-2">
        <AnchorNavigation anchorsObj={anchorsObj.subAnchorsObj} />
    </div>
</article>