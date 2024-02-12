<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Button from 'component/Button.svelte'

    let lineHeightObj = {
        'Normal': 'normal',
        '0': '0',
        '1': '1',
        '4': '4'
    }
    let lineHeight:string = '4'
    
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
    <h4 id="alignBlock">Inline container</h4>
    <div class="d-grid g-5">
        <p>
            The <b>va-...</b> classes sets vertical alignment of an <b>inline</b> or <b>inline-block</b> blocks.
        </p>
        <div class="d-grid g-4">
            <b>Line height</b>
            <div class="d-inline-flex fw-wrap g-3">
                {#each Object.entries(lineHeightObj) as [key, value]}
                    <Button
                        class="{lineHeight === value ? 'active' : ''}"
                        on:click = {() => lineHeight = value}
                        disabled={lineHeight === value}
                    >{key}</Button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid g-3 p-3 bgc-positive br">
                <div class="d-grid ws-nowrap ox-auto" style="--lh: {lineHeight}">
                    <div class="lh gc-full gr-full my-auto border-bottom border-top c-negative-10">&nbsp;<!-- base line indicator--></div>
                    <div class="lh gc-full gr-full my-auto border-bottom c-negative-20"><!-- base line indicator--></div>
                    <div class="lh gc-full gr-full py-4">
                        {#each Object.entries(verticalAlignObj) as [key, value]}
                            <span class="bgc-negative-10 px-1 me-1 br {key}">{value}</span>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {#each Object.entries(verticalAlignObj) as [key, value]}
                    {
`   <span class="${key}">${value}</span>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</div>