<script>
    import Precode from 'component/Precode.svelte'

    let bgClipArr = ['border', 'padding', 'content', 'text']
</script>

<section>
    <h3 id="clip">Clip</h3>
    <p>
        The <b>bga-{bgClipArr.join('/')}</b> property sets made the background extends underneath its border box, padding box, content box or text border cliping.
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid g-3 p-3 bgc-positive br">
                {#each bgClipArr as clip}
                    <div
                        class="p-4 fs-xxxl fw-700 bgi bgc-negative-10 bgc-{clip} bgr-round"
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
`<div class="bgi bgc-${clip}" style="--bgi: url(...)">
    // ...
</div>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</section>