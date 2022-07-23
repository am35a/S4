<script lang="ts">
    import SectionVerticalAlign from './verticalalign/VerticalAlign.svelte'
    import SectionJustifyContent from './justifycontent/JustifyContent.svelte'
    import SectionJustifyItems from './justifyitems/JustifyItems.svelte'
    import SectionJustifySelf from './justifyself/JustifySelf.svelte'
    import SectionAlignContent from './aligncontent/AlignContent.svelte'
    import SectionAlignItems from './alignitems/AlignItems.svelte'
    import SectionAlignSelf from './alignself/AlignSelf.svelte'
</script>

<article class="d-grid g-2">
    <h2 id="Alignment">Alignment</h2>
    <SectionVerticalAlign />
    <SectionJustifyContent />
    <SectionJustifyItems />
    <SectionJustifySelf />
    <SectionAlignContent />
    <SectionAlignItems />
    <SectionAlignSelf />
</article>