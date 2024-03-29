<script>
    import Precode from 'component/Precode.svelte'

    let widthParamsArr = [ '', '--0', '--25', '--50', '--75', '--100', '--fit', '--min', '--max' ],
        containerWidth = 100
</script>

<section>
    <h3 id="width">Width</h3>
    <p>
        The <b>width</b> classes are used to set the width. Using <b>--min-width/width/max-width</b> variable
        sets custon width. Full list of the width classes:
        <br>
        <span class="display--inline-flex gap--md">
            <span class="display--grid gap--xs">
                {#each widthParamsArr as param}
                    <span class="fw-600">min-width{param}</span>
                {/each}
            </span>
            <span class="display--grid gap--xs">
                {#each widthParamsArr as param}
                    <span class="fw-600">width{param}</span>
                {/each}
            </span>
            <span class="display--grid gap--xs">
                {#each widthParamsArr as param}
                    <span class="fw-600">max-width{param}</span>
                {/each}
            </span>
        </span>
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <div class="display--grid margin-bottom--xs">
                    <label for="growContainerWidth" class="display--grid grid-template-columns--3 align-items--end padding-x--xs">
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
                    class="background-color--negative-10 width"
                    style="--width: {containerWidth}%"
                >&nbsp;</div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>HTML</b>
            <Precode>
                {
`div class="width" style="--width: ${containerWidth}%"> ... </div>
`
                }
            </Precode>
        </div>
    </div>
</section>