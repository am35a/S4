<script lang="ts">
    import SectionVerticalAlign from './verticalalign/VerticalAlign.svelte'
    import SectionJustifyContent from './justifycontent/JustifyContent.svelte'
    import SectionJustifyItems from './justifyitems/JustifyItems.svelte'
    import SectionJustifySelf from './justifyself/JustifySelf.svelte'
    import SectionAlignItems from './alignitems/AlignItems.svelte'
    import SectionAlignSelf from './alignself/AlignSelf.svelte'

</script>

<article class="d-grid g-4">
    <h2>Alignment</h2>
    <SectionVerticalAlign />
    <SectionJustifyContent />
    <SectionJustifyItems />
    <SectionJustifySelf />
    <SectionAlignItems />
    <SectionAlignSelf />
</article>