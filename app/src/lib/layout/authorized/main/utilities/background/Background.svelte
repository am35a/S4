<script>
    import SectionAttachment from './attachment/Attachment.svelte'
    import SectionClip from './clip/Clip.svelte'
    import SectionOrigin from './origin/Origin.svelte'
    import SectionColor from './color/Color.svelte'
    import SectionImage from './image/Image.svelte'
    import SectionPosition from './position/Position.svelte'
    import SectionRepeat from './repeat/Repeat.svelte'
    import SectionSize from './size/Size.svelte'

    import AnchorNavigation from 'src/lib/layout/components/AnchorNavigation.svelte'
</script>

<script context="module">
    export const anchorsObj = {
        headAnchorObg: {
            background: 'Background'
        },
        subAnchorsObj: {
            attachment: 'Attachment',
            clip: 'Clip',
            origin: 'Origin',
            color: 'Color',
            image: 'Image',
            position: 'Position',
            repeat: 'Repeat',
            size: 'Size'
        }
	}
</script>

<article>
    <h2 id={Object.keys(anchorsObj.headAnchorObg)}>
        {Object.values(anchorsObj.headAnchorObg)}
    </h2>
    <SectionAttachment />
    <SectionClip />
    <SectionOrigin />
    <SectionColor />
    <SectionImage />
    <SectionPosition />
    <SectionRepeat />
    <SectionSize />

    <div class="p-sticky b-0 p-2">
        <AnchorNavigation anchorsObj={anchorsObj.subAnchorsObj} />
    </div>
</article>