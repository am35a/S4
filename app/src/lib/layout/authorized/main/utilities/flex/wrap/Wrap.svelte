<script>
    import Precode from 'component/Precode.svelte'

    let flexWrapArr = ['nowrap', 'wrap', 'wrap-reverse'],
        flexWrap = flexWrapArr[0]

    let cellNamesArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        containerWidth = 100,
        isCellShrinked = true
</script>

<section>
    <h3 id="wrap">Wrap</h3>
    <p>
        The <b>fw-{flexWrapArr.join('/')}</b> classes help to change wrap items in a flex container.
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Wrap</b>
            <div class="d-inline-flex fw-wrap g-3">
                {#each flexWrapArr as values }
                    <button
                        class="btn"
                        class:active ={flexWrap === values}
                        on:click = {() => flexWrap = values}
                        disabled = {flexWrap === values}
                    >fw-{values}</button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Space</b>
            <div class="d-inline-flex fw-wrap g-3">
                <button
                    class="btn"
                    class:active = {isCellShrinked}
                    on:click = {() => isCellShrinked = !isCellShrinked}
                    disabled = {isCellShrinked}
                >fxs-0</button>
                <button
                    class="btn"
                    class:active = {!isCellShrinked}
                    on:click = {() => isCellShrinked = !isCellShrinked}
                    disabled = {!isCellShrinked}
                >ws-nowrap</button>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid g-3 p-3 bgc-positive br-md">
                <div class="d-grid mb-2">
                    <label for="growContainerWidth" class="d-grid gtc-3 ai-end px-2">
                        <small class="ta-start">min</small>
                        <div class="ta-center">Width {containerWidth}%</div>
                        <small class="ta-end">max</small>
                    </label>
                    <input
                        class="frm"
                        id="growContainerWidth"
                        min={0}
                        max={100}
                        step={1}
                        bind:value={containerWidth}
                        type="range"
                    >
                </div>
                <div
                    class="d-flex fw-{flexWrap} g-2 p-2 bgc-negative-10 ox-hidden w"
                    class:ws-nowrap={!isCellShrinked}
                    style="--w: {containerWidth}%"
                >
                    {#each cellNamesArr as name }
                        <div
                            class="bgc-negative-10 px-2 py-1"
                            class:fxs-0={isCellShrinked}
                        >{name}</div>
                    {/each}
                </div>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="d-flex fw-${flexWrap} ${isCellShrinked ? '' : 'ws-nowrap'}">
    <div ${isCellShrinked ? 'class="fxs-0"' : ''}>...</div>
    // ...
</div>
`
                }
            </Precode>
        </div>
    </div>
</section>