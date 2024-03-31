<script>
    import Precode from 'component/Precode.svelte'

    let gapAxesObj={
            'All': '',
            'Row': 'row-',
            'Column': 'column-'
        },
        gapAxis = gapAxesObj['All'],
        spacingSizesArr = ['none', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
        spaceSize = spacingSizesArr[4]
</script>

<section>
    <h3 id="gaping">Gaping</h3>
    <!-- <p>
        ...
    </p> -->
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Axes</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
                {#each Object.entries(gapAxesObj) as [key, value]}
                    <button
                        class="btn"
                        class:active={gapAxis === value}
                        on:click={() => gapAxis = value}
                        disabled={gapAxis === value}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Size</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
                {#each spacingSizesArr as value, i}
                    <button
                        class="btn"
                        class:active={spaceSize === value}
                        on:click={() => spaceSize = spacingSizesArr[i]}
                        disabled={spaceSize === value}
                    >{value}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <div class="background-color--negative-10 display--grid grid-template-columns--3 {gapAxis}gap--{spaceSize}">
                    {#each {length: 9} as _}
                        <div class="background-color--negative-10 padding-y--xxl ta-center">cell</div>
                    {/each}
                </div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>HTML</b>
            <Precode>
                {
`<div class="gap--${spaceSize}">
    ...
</div>
`
                }
            </Precode>
        </div>
    </div>
</section>