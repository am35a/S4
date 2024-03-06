<script>
    import Precode from 'component/Precode.svelte'

    let bgClipArr = ['border', 'padding', 'content', 'text']
    let containerClasses = 'bgr-round'
</script>

<section>
    <h3 id="clip">Clip</h3>
    <p>
        The <b>bga-{bgClipArr.join('/')}</b> property sets made the background extends underneath its
        border box, padding box, content box or text border cliping.
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
                    Play with the <b>bgr-no</b>, <b>bgo-border</b> or other background classes
                    to view different results.
                </div>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid g-3 p-3 bgc-positive br-md">
                {#each bgClipArr as clip}
                    <div
                        class="p-4 fs-xxxl fw-700 bgi bgc-negative-10 bgc-{clip} {containerClasses}"
                        style="--bgi: url(/images/logo.svg); border: 1em dashed;"
                    >Lorem ipsum dolor sit amet.</div>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {#each bgClipArr as clip}
                    {
`<div class="bgi bgc-${clip} ${containerClasses}" style="--bgi: url(...)">
    // ...
</div>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</section>