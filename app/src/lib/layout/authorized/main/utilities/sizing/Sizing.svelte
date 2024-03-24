<script>
    import SectionWidth from './width/Width.svelte'
    import SectionHeight from './height/Height.svelte'
    import SectionResize from './resize/Resize.svelte'
    import SectionAspectratio from './aspectratio/Aspectratio.svelte'

    import AnchorNavigation from 'src/lib/layout/components/AnchorNavigation.svelte'
</script>

<script context="module">
    export const anchorsObj = {
        headAnchorObg: {
            sizing: 'Sizing'
        },
        subAnchorsObj: {
            Width: 'Width',
            Height: 'Height',
            Resize: 'Resize',
            aspectRatio: 'Aspect ratio',
        }
	}
</script>

<article>
    <h2 id={Object.keys(anchorsObj.headAnchorObg)}>
        {Object.values(anchorsObj.headAnchorObg)}
    </h2>
    <SectionWidth />
    <SectionHeight />
    <SectionResize />
    <SectionAspectratio />

    <div class="position--sticky bottom--0 p-2">
        <AnchorNavigation anchorsObj={anchorsObj.subAnchorsObj} />
    </div>
</article>