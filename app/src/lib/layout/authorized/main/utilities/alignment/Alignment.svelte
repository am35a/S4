<script lang="ts">
    import Button from 'component/Button.svelte'
    import Icon from 'component/Icon.svelte'

    import SectionVerticalAlign from './verticalalign/VerticalAlign.svelte'
    import SectionJustifyContent from './justifycontent/JustifyContent.svelte'
    import SectionJustifyItems from './justifyitems/JustifyItems.svelte'
    import SectionJustifySelf from './justifyself/JustifySelf.svelte'
    import SectionAlignContent from './aligncontent/AlignContent.svelte'
    import SectionAlignItems from './alignitems/AlignItems.svelte'
    import SectionAlignSelf from './alignself/AlignSelf.svelte'

    let alignmentsObj = {
        verticalAlignment: 'Vertical alignment',
        justifyContent: 'Justify content',
        justifyItems: 'Justify items',
        justifySelf: 'Justify self',
        alignContent: 'Align content',
        alignItems: 'Align items',
        alignSelf: 'Align self'
    }
</script>

<article>
    <h2 id="alignment">Alignment</h2>
    <SectionVerticalAlign />
    <SectionJustifyContent />
    <SectionJustifyItems />
    <SectionJustifySelf />
    <SectionAlignContent />
    <SectionAlignItems />
    <SectionAlignSelf />
    <div class="p-sticky b-0 d-flex g-1 bgc-positive p-2 br w-fit ms-auto bs-sm">
        <div class="d-flex fw-wrap g-1 w-fit ms-auto">
            {#each Object.entries(alignmentsObj) as [key, value]}
                <Button
                    class="btn-xs btn-alt"
                    on:click={() => window.open(`#${key}`, '_self')}
                >{value}</Button>
            {/each}
        </div>
        <Button
            class="btn btn-ico btn-xs"
            on:click={() => window.open('#alignment', '_self')}
        ><Icon name="arrow-top-big" /></Button>
    </div>
</article>