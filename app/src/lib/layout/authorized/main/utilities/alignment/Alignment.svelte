<script>
    import SectionVerticalAlign from './verticalalign/VerticalAlign.svelte'
    import SectionJustifyContent from './justifycontent/JustifyContent.svelte'
    import SectionJustifyItems from './justifyitems/JustifyItems.svelte'
    import SectionJustifySelf from './justifyself/JustifySelf.svelte'
    import SectionAlignContent from './aligncontent/AlignContent.svelte'
    import SectionAlignItems from './alignitems/AlignItems.svelte'
    import SectionAlignSelf from './alignself/AlignSelf.svelte'

    import AnchorNavigation from 'src/lib/layout/components/AnchorNavigation.svelte'
</script>

<script context="module">
    export const anchorsObj = {
        headAnchorObg: {
            alignment: 'Alignment'
        },
        subAnchorsObj: {
            verticalAlignment: 'Vertical alignment',
            justifyContent: 'Justify content',
            justifyItems: 'Justify items',
            justifySelf: 'Justify self',
            alignContent: 'Align content',
            alignItems: 'Align items',
            alignSelf: 'Align self'
        }
	}
</script>

<article>
    <h2 id={Object.keys(anchorsObj.headAnchorObg)}>
        {Object.values(anchorsObj.headAnchorObg)}
    </h2>
    <SectionVerticalAlign />
    <SectionJustifyContent />
    <SectionJustifyItems />
    <SectionJustifySelf />
    <SectionAlignContent />
    <SectionAlignItems />
    <SectionAlignSelf />

    <div class="position--sticky bottom--0 padding--xs">
        <AnchorNavigation anchorsObj={anchorsObj.subAnchorsObj} />
    </div>
</article>