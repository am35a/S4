<script>
    import Precode from 'component/Precode.svelte'

    let bgOriginArr = ['border', 'padding', 'content']
    let containerClasses = ''
</script>

<section>
    <h3 id="backgroundOrigin">Origin</h3>
    <p>
        Change the background`s origin from the border start, inside the border, or inside the padding by the classes <b>bga-{bgOriginArr.join('/')}</b>.
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Customize container</b>
            <div class="d-grid">
                <input
                    class="frm"
                    bind:value={containerClasses}
                    type="text"
                    placeholder="Type utility classes to customizing the container"
                >
                <div class="fs-sm">
                    Play with the <b>bgr</b> or other background classes to view different results.
                </div>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid g-3 p-3 bgc-positive br">
                {#each bgOriginArr as origin}
                    <div
                        class="p-4 fs-xxxl fw-700 bgi bgc-negative-10 bgo-{origin} {containerClasses}"
                        style="--bgi: url(/images/logo.svg); border: 1em dashed;"
                    >Lorem ipsum dolor sit amet.</div>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {#each bgOriginArr as origin}
                    {
`<div class="bgi bgo-${origin} ${containerClasses}" style="--bgi: url(...)">
    // ...
</div>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</section>
