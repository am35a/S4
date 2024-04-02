<script>
    import Precode from 'component/Precode.svelte'

    let heightParamsArr = [ '', '--0', '--25', '--50', '--75', '--100', '--fit', '--min', '--max' ]
    let containerHeight = 100
</script>

<section>
    <h3 id="height">Height</h3>
    <p>
        The <b>height</b> classes are used to set the height. The prefix <b>m</b> before <b>height</b> sets the minimum value and after <b>height</b> the maximum value of the height.
        Using <b>--min-height/height/max-height</b> variable sets custon height. 
        Full list of the height classes:
        <br>
        <span class="display--inline-flex gap--md">
            <span class="display--grid gap--xs">
                {#each heightParamsArr as param}
                    <span class="font-weight--600">min-height{param}</span>
                {/each}
            </span>
            <span class="display--grid gap--xs">
                {#each heightParamsArr as param}
                    <span class="font-weight--600">height{param}</span>
                {/each}
            </span>
            <span class="display--grid gap--xs">
                {#each heightParamsArr as param}
                    <span class="font-weight--600">max-height{param}</span>
                {/each}
            </span>
        </span>
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid grid-template-columns--2 gap--sm padding--sm background-color--positive border-radius--md">
                <div class="display--flex">
                    <input
                        id="growContainerHeight"
                        min={0}
                        max={100}
                        step={1}
                        bind:value={containerHeight}
                        type="range"
                        orient="vertical"
                    >
                    <label
                        for="growContainerHeight"
                        class="display--flex flex-direction--column
                        justify-content--between padding-x--xs"
                    >
                        <small>min</small>
                        <div>Height {containerHeight}%</div>
                        <small>max</small>
                    </label>
                </div>
                <div
                    class="background-color--negative-10 height align-self--end"
                    style="--height: {containerHeight}%"
                ></div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
            <Precode>
                {
`div class="height" style="--height: ${containerHeight}%"> ... </div>
`
                }
            </Precode>
        </div>
    </div>
</section>