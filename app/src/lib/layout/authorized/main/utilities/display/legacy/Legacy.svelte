<script>
    import Precode from 'component/Precode.svelte'

    let legacysArr = ['inline-block', 'inline-flex', 'inline-grid']
    let legacy = legacysArr[0]
</script>

<section class="display--grid gap--xs">
    <h3 id="legacy">Legacy</h3>
    <p>
        From CSS 2 the legasy display values welcome still here and set control element of their both side. Equared to two modern two words value: "inline-flex" = "inline flex" and ect.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Display</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
                {#each legacysArr as values }
                    <button
                        class="btn"
                        class:active={legacy === values}
                        on:click={() => legacy = values}
                        disabled={legacy === values}
                    >{values}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <div class="display--{legacy}">
                    <span class="background-color--negative-10 padding--md">span</span>
                    <div class="background-color--negative-10 padding--md">div</div>
                </div>
            </div>
        </div>
    </div>
    <div class="display--grid gap--md">
        <b>HTML</b>
        <Precode>
            {
`<div class="display--${legacy}">
    <span> ... </span>
    <div> ... </div>
</div>
`
            }
        </Precode>
    </div>
</section>