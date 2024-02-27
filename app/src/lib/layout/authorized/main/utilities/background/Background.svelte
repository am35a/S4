<script lang="ts">
    import SectionAttachment from './attachment/Attachment.svelte'
    import SectionClip from './clip/Clip.svelte'
    import SectionColor from './color/Color.svelte'
    import SectionImage from './image/Image.svelte'
    import SectionOrigin from './origin/Origin.svelte'
    import SectionPosition from './position/Position.svelte'
    import SectionRepeat from './repeat/Repeat.svelte'
    import SectionSize from './size/Size.svelte'
</script>

<article>
    <h2 id="background">Background</h2>
    <SectionAttachment />
    <SectionClip />
    <SectionColor />
    <SectionImage />
    <SectionOrigin />
    <SectionPosition />
    <SectionRepeat />
    <SectionSize />
</article>