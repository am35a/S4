<script lang="ts">
    import Precode from 'component/Precode.svelte'

    let lineHeightObj={
            'Normal': 'normal',
            '0': '0',
            '1': '1',
            '4': '4'
        },
        lineHeight:string = '4'
    
    let verticalAlignObj={
        'Baseline': 'baseline',
        'Sub': 'sub',
        'Super': 'super',
        'Top': 'top',
        'Middle': 'middle',
        'Bottom': 'bottom',
        'Text bottom': 'text-bottom',
        'Text top': 'text-top'
    }
</script>

<div>
    <h4 id="alignBlock">Inline container</h4>
    <p>
        The <b>va-{Object.values(verticalAlignObj).join('/')}</b> classes sets vertical alignment of an <b>inline</b> or <b>inline-block</b> blocks.
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Line height</b>
            <div class="d-inline-flex fw-wrap g-3">
                {#each Object.entries(lineHeightObj) as [key, value]}
                    <button
                        class = "btn"
                        class:active = {lineHeight === key}
                        on:click = {() => lineHeight = key}
                        disabled = {lineHeight === key}
                    >{value}</button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid g-3 p-3 bgc-positive br-md">
                <div class="d-grid ws-nowrap ox-auto" style="--lh: {lineHeight}">
                    <div class="lh gc-full gr-full my-auto border-bottom border-top c-negative-10">&nbsp;<!-- base line indicator--></div>
                    <div class="lh gc-full gr-full my-auto border-bottom c-negative-20"><!-- base line indicator--></div>
                    <div class="lh gc-full gr-full py-4">
                        {#each Object.entries(verticalAlignObj) as [key, value]}
                            <span class="bgc-negative-10 px-1 me-1 br-md va-{value}">{key}</span>
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
`<span class="${key}">${value}</span>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</div>