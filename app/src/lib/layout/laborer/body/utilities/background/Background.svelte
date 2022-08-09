<script lang="ts">
    import SectionColor from './color/Color.svelte'
    import SectionImage from './image/Image.svelte'
    import SectionOrigin from './origin/Origin.svelte'
    import SectionPosition from './position/Position.svelte'
    import SectionRepeat from './repeat/Repeat.svelte'
    import SectionSize from './size/Size.svelte'
    import SectionAttachment from './attachment/Attachment.svelte'
</script>

<article class="d-grid g-2">
    <h2 id="Background">Background</h2>
    <SectionColor />
    <SectionImage />
    <SectionAttachment />
    <SectionOrigin />
    <SectionPosition />
    <SectionRepeat />
    <SectionSize />
</article>