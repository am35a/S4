<script>
    import Precode from 'component/Precode.svelte'
    import Button from 'component/Button.svelte'
    
    let containerTypesObj = {
        grid: 'd-grid gtc-2',
        flex: 'd-flex'
    },
        containerType = containerTypesObj.grid

    let alignItemsArr = [ 'baseline', 'center', 'end', 'start', 'stretch' ],
        alignItems = alignItemsArr[0]
</script>

<section>
    <h3 id="alignItems">Align items</h3>
    <p>
        The <b>ai-{alignItemsArr.join('/')}</b> classes sets the <b>as-</b> classes value on all direct children as a group.
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Display</b>
            <div class="d-inline-flex fw-wrap g-3">
                {#each Object.entries(containerTypesObj) as [key, value]}
                    <Button
                        class={containerType === value ? 'active' : ''}
                        on:click = {() => containerType = value}
                        disabled = {containerType === value}
                    >{key}</Button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Align</b>
            <div class="d-inline-flex fw-wrap g-3">
                {#each alignItemsArr as value }
                    <button
                        class="btn"
                        class:active={alignItems === value}
                        on:click = {() => alignItems = value}
                        disabled = {alignItems === value}
                    >ai-{value}</button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="{containerType} g-3 p-3 ai-{alignItems} bgc-positive br h" style="--h: 16em; --p_h: 24em;">
                <div class="bgc-negative-10 px-2 py-1">one</div>
                <div class="bgc-negative-10 px-2 py-1">two</div>
                <div class="bgc-negative-10 px-2 py-1">three</div>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="${containerType} ai-${alignItems}">
    // ...
</div>
`
                }
            </Precode>
        </div>
    </div>
</section>