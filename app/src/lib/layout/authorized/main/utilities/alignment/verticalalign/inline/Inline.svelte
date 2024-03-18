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
        The <b>vertical-align--{Object.values(verticalAlignObj).join('/')}</b> classes sets vertical alignment of an <b>inline</b> or <b>inline-block</b> blocks.
    </p>
    <div class="display--grid g-5">
        <div class="display--grid g-4">
            <b>Line height</b>
            <div class="display--inline-flex fw-wrap g-3">
                {#each Object.entries(lineHeightObj) as [key, value]}
                    <button
                        class="btn"
                        class:active={lineHeight === key}
                        on:click={() => lineHeight = key}
                        disabled={lineHeight === key}
                    >{value}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="display--grid g-3 p-3 background-color--positive border-radius--md">
                <div class="display--grid ws-nowrap ox-auto" style="--lh: {lineHeight}">
                    <div class="lh gc-full gr-full my-auto border-bottom border-top c-negative-10">&nbsp;<!-- base line indicator--></div>
                    <div class="lh gc-full gr-full my-auto border-bottom c-negative-20"><!-- base line indicator--></div>
                    <div class="lh gc-full gr-full py-4">
                        {#each Object.entries(verticalAlignObj) as [key, value]}
                            <span class="background-color--negative-10 px-1 me-1 border-radius--md vertical-align--{value}">{key}</span>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
        <div class="display--grid g-4">
            <b>HTML</b>
            <Precode>
                {#each Object.entries(verticalAlignObj) as [key, value]}
                    {
`<span class="vertical-align--${value}">${key}</span>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</div>