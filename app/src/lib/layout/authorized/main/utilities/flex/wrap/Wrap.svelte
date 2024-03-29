<script>
    import Precode from 'component/Precode.svelte'

    let wrapArr = ['nowrap', 'wrap', 'wrap-reverse'],
        wrap = wrapArr[0]

    let cellNamesArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        containerWidth = 100,
        isCellShrinked = true
</script>

<section>
    <h3 id="wrap">Wrap</h3>
    <p>
        The <b>fw-{wrapArr.join('/')}</b> classes help to change wrap items in a flex container.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Wrap</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
                {#each wrapArr as values}
                    <button
                        class="btn"
                        class:active={wrap === values}
                        on:click={() => wrap = values}
                        disabled={wrap === values}
                    >fw-{values}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Space</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
                <button
                    class="btn"
                    class:active={isCellShrinked}
                    on:click={() => isCellShrinked = !isCellShrinked}
                    disabled={isCellShrinked}
                >flex-shrink--0</button>
                <button
                    class="btn"
                    class:active={!isCellShrinked}
                    on:click={() => isCellShrinked = !isCellShrinked}
                    disabled={!isCellShrinked}
                >ws-nowrap</button>
            </div>
        </div>
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
                    class="display--flex flex-wrap--{wrap} gap--xs padding--xs background-color--negative-10 overflow-x--hidden width"
                    class:ws-nowrap={!isCellShrinked}
                    style="--width: {containerWidth}%"
                >
                    {#each cellNamesArr as name}
                        <div
                            class="background-color--negative-10 padding-x--xs padding-y--xxs"
                            class:flex-shrink--0={isCellShrinked}
                        >{name}</div>
                    {/each}
                </div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>HTML</b>
            <Precode>
                {
`<div class="display--flex flex-wrap--${wrap} ${isCellShrinked ? '' : 'ws-nowrap'}">
    <div ${isCellShrinked ? 'class="flex-shrink--0"' : ''}> ... </div>
    ...
</div>
`
               }
            </Precode>
        </div>
    </div>
</section>