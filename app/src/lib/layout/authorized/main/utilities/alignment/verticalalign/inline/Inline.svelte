<script>
    import Precode from 'component/Precode.svelte'

    let lineHeightObj={
            'Normal': 'normal',
            '0': '0',
            '1': '1',
            '4': '4'
        },
        lineHeight = '4'
    
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
        The <b>vertical-align--{Object.values(verticalAlignObj).join('/')}</b> classes sets vertical
        alignment of an <b>inline</b> or <b>inline-block</b> blocks.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Line height</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
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
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <div class="display--grid white-space--nowrap overflow-x--auto" style="--lh: {lineHeight}">
                    <div class="lh grid-column--full grid-row--full margin-y--auto border-top-style--solid border-bottom-style--solid c-negative-10">&nbsp;<!-- base line indicator--></div>
                    <div class="lh grid-column--full grid-row--full margin-y--auto border-top-style--solid border-bottom-style--solid c-negative-20"><!-- base line indicator--></div>
                    <div class="lh grid-column--full grid-row--full padding-y--md">
                        {#each Object.entries(verticalAlignObj) as [key, value]}
                            <span class="background-color--negative-10 padding-x--xxs margin-right--xxs vertical-align--{value}">{key}</span>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
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