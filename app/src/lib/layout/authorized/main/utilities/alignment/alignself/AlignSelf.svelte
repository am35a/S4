<script>
    import Precode from 'component/Precode.svelte'

    let containerTypesObj={
        grid: 'display--grid grid-template-columns--2',
        flex: 'display--flex'
    },
        containerType = containerTypesObj.grid

    let alignSelfArr = ['baseline', 'center', 'end', 'start', 'stretch'],
        alignSelf = alignSelfArr[0]
</script>

<section>
    <h3 id="alignSelf">Align self</h3>
    <p>
        The <b>align-self--{alignSelfArr.join('/')}</b> classes overrides a <b>grid</b> or <b>flex</b> item's <b>align-items--</b> classes value.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Display</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
                {#each Object.entries(containerTypesObj) as [key, value]}
                    <button
                        class="btn"
                        class:active={containerType === value}
                        on:click={() => containerType = value}
                        disabled={containerType === value}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Align</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
                {#each alignSelfArr as value}
                    <button
                        class="btn"
                        class:active={alignSelf === value}
                        on:click={() => alignSelf = value}
                        disabled={alignSelf === value}
                    >align-self--{value}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="{containerType} gap--sm padding--sm background-color--positive border-radius--md height" style="--height: 16em; --p_height: 24em;">
                <div class="background-color--negative-10 padding-x--xs padding-y--xxs align-self--{alignSelf}">one</div>
                <div class="background-color--negative-10 padding-x--xs padding-y--xxs">two</div>
                <div class="background-color--negative-10 padding-x--xs padding-y--xxs">three</div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>HTML</b>
            <Precode>
                {
`<div class="${containerType}">
    <div class="align-self--${alignSelf}">one</div>
    ...
</div>
`
                }
            </Precode>
        </div>
    </div>
</section>
