<script>
    import Precode from 'component/Precode.svelte'

    let originsArr = ['border', 'padding', 'content'],
        containerClasses = ''
</script>

<section>
    <h3 id="origin">Origin</h3>
    <p>
        Change the background`s origin from the border start, inside the border, or inside the padding
        by the classes <b>background-origin--{originsArr.join('/')}</b>.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Customize container</b>
            <div class="display--grid">
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
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                {#each originsArr as origin}
                    <div
                        class="padding--md fs-xxxl fw-700 background-image background-color--negative-10 background-origin--{origin} {containerClasses}"
                        style="--background-image: url(/images/logo.svg); border: 1em dashed;"
                    >Lorem ipsum dolor sit amet.</div>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>HTML</b>
            <Precode>
                {#each originsArr as origin}
                    {
`<div
    class="background-image background-origin--${origin} ${containerClasses}"
    style="--background-image: url(...)"
> ... </div>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</section>
