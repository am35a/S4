<script>
    import Precode from 'component/Precode.svelte'

    let clipsArr = ['border', 'padding', 'content', 'text'],
        containerClasses = 'background-repeat--round'
</script>

<section>
    <h3 id="clip">Clip</h3>
    <p>
        The <b>background-clip--{clipsArr.join('/')}</b> property sets made the background extends
        underneath its border box, padding box, content box or text border cliping.
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
                    Play with the <b>background-repeat--no</b>, <b>background-origin--border</b> or
                    other background classes to view different results.
                </div>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid g-3 p-3 background-color--positive border-radius--md">
                {#each clipsArr as clip}
                    <div
                        class="p-4 fs-xxxl fw-700 background-image background-color--negative-10 background-clip--{clip} {containerClasses}"
                        style="--background-image: url(/images/logo.svg); border: 1em dashed;"
                    >Lorem ipsum dolor sit amet.</div>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {#each clipsArr as clip}
                    {
`<div
    class="background-image background-clip--${clip} ${containerClasses}"
    style="--background-image: url(...)"
> // ... </div>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</section>