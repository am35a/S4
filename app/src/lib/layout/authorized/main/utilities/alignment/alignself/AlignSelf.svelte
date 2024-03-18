<script>
    import Precode from 'component/Precode.svelte'

    let containerTypesObj={
        grid: 'display--grid gtc-2',
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
    <div class="display--grid g-5">
        <div class="display--grid g-4">
            <b>Display</b>
            <div class="display--inline-flex fw-wrap g-3">
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
        <div class="display--grid g-4">
            <b>Align</b>
            <div class="display--inline-flex fw-wrap g-3">
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
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="{containerType} g-3 p-3 background-color--positive border-radius--md h" style="--h: 16em; --p_h: 24em;">
                <div class="background-color--negative-10 px-2 py-1 align-self--{alignSelf}">one</div>
                <div class="background-color--negative-10 px-2 py-1">two</div>
                <div class="background-color--negative-10 px-2 py-1">three</div>
            </div>
        </div>
        <div class="display--grid g-4">
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
