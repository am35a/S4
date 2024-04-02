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
                <div class="font-size--sm">
                    Play with the <b>background-repeat--no</b>, <b>background-origin--border</b> or
                    other background classes to view different results.
                </div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                {#each clipsArr as clip}
                    <div
                        class="padding--md font-size--xxxl font-weight--700 background-image background-color--negative-10 background-clip--{clip} {containerClasses}"
                        style="--background-image: url(/images/logo.svg); border: 1em dashed;"
                    >Lorem ipsum dolor sit amet.</div>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
            <Precode>
                {#each clipsArr as clip}
                    {
`<div
    class="background-image background-clip--${clip} ${containerClasses}"
    style="--background-image: url(...)"
> ... </div>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</section>