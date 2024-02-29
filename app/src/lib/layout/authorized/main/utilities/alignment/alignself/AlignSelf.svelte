<script>
    import Precode from 'component/Precode.svelte'

    let containerTypesObj = {
        grid: 'd-grid gtc-2',
        flex: 'd-flex'
    },
        containerType = containerTypesObj.grid

    let alignSelfArr = ['baseline', 'center', 'end', 'start', 'stretch'],
        alignSelf = alignSelfArr[0]
</script>

<section>
    <h3 id="alignSelf">Align self</h3>
    <p>
        The <b>as-{alignSelfArr.join('/')}</b> classes overrides a <b>grid</b> or <b>flex</b> item's <b>ai-</b> classes value.
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Display</b>
            <div class="d-inline-flex fw-wrap g-3">
                {#each Object.entries(containerTypesObj) as [key, value]}
                    <button
                        class="btn"
                        class:active = {containerType === value}
                        on:click = {() => containerType = value}
                        disabled = {containerType === value}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Align</b>
            <div class="d-inline-flex fw-wrap g-3">
                {#each alignSelfArr as value}
                    <button
                        class="btn"
                        class:active={alignSelf === value}
                        on:click = {() => alignSelf = value}
                        disabled = {alignSelf === value}
                    >as-{value}</button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="{containerType} g-3 p-3 bgc-positive br h" style="--h: 16em; --p_h: 24em;">
                <div class="bgc-negative-10 px-2 py-1 as-{alignSelf}">one</div>
                <div class="bgc-negative-10 px-2 py-1">two</div>
                <div class="bgc-negative-10 px-2 py-1">three</div>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="${containerType}">
    <div class="as-${alignSelf}">one</div>
    // ...
</div>
`
                }
            </Precode>
        </div>
    </div>
</section>
