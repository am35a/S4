<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Button from 'component/Button.svelte'
    import Details from 'component/Details.svelte'

    let lineHeight:string = ''
    let lineHeightObj = {
        auto: '',
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4'
    }
    let verticalAlignObj = {
        'va-baseline': 'Baseline',
        'va-sub': 'Sub',
        'va-super': 'Super',
        'va-top': 'Top',
        'va-middle': 'Middle',
        'va-bottom': 'Bottom',
        'va-text-bottom': 'Text bottom',
        'va-text-top': 'Text top'
    }
</script>

<div>
    <h4>Inline container</h4>
    <p>
        The <b>vertical-align-...</b> styles sets vertical alignment of an <b>inline</b>, <b>inline-block</b> elements.
    </p>
    <div class="d-grid g-4 mb-4 p-4 bgc-positive rounded">
        <div class="d-inline-flex fw-wrap g-4">
            {#each Object.entries(lineHeightObj) as [key, value]}
                <Button
                    class="btn-secondary {lineHeight === value ? 'active' : ''}"
                    on:click = {() => lineHeight = value}
                    disabled={lineHeight === value}
                >lh-{key}</Button>
            {/each}
        </div>
        <div class="d-grid g-4 space-nowrap ox-auto" style="--lh: {lineHeight}">
            <div class="lh col-span-full row-span-full my-auto border-bottom border-top color-negative-10">&nbsp;<!-- base line indicator--></div>
            <div class="lh col-span-full row-span-full my-auto border-bottom color-negative-20"><!-- base line indicator--></div>
            <div class="lh col-span-full row-span-full py-4">
                {#each Object.entries(verticalAlignObj) as [key, value]}
                    <span class="bgc-negative-10 px-1 mr-1 rounded {key}">{value}</span>
                {/each}
            </div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {#each Object.entries(verticalAlignObj) as [key, value]}
                    {
`<span class="${key}">${value}</span>
`
                    }
                {/each}
            </Precode>
        </svelte:fragment>
    </Details>
</div>