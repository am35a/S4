<script>
    import SectionVerticalAlign from './verticalalign/VerticalAlign.svelte'
    import SectionJustifyContent from './justifycontent/JustifyContent.svelte'
    import SectionJustifyItems from './justifyitems/JustifyItems.svelte'
    import SectionJustifySelf from './justifyself/JustifySelf.svelte'
    import SectionAlignContent from './aligncontent/AlignContent.svelte'
    import SectionAlignItems from './alignitems/AlignItems.svelte'
    import SectionAlignSelf from './alignself/AlignSelf.svelte'

    let alignmentsObj={
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
    <div class="p-sticky b-0 p-2">
        <div class="d-flex g-1 background-color--positive p-2 w-fit ms-auto br-md bs-sm border border-negative-30 fs-sm">
            <div class="d-flex fw-wrap g-1 w-fit ms-auto fs-sm">
                {#each Object.entries(alignmentsObj) as [key, value]}
                    <button
                        class="btn btn-primary btn-alt"
                        on:click={() => window.open(`#${key}`, '_self')}
                    >{value}</button>
                {/each}
            </div>
            <button
                class="btn btn-ico fs-sm"
                on:click={() => window.open('#alignment', '_self')}
            ><span class="ico" style="--ico-image: url(/icons/arrow-top-big.svg);"></span></button>
        </div>
    </div>
</article>