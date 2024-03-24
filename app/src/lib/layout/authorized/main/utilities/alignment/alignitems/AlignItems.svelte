<script>
    import Precode from 'component/Precode.svelte'
    import Button from 'component/Button.svelte'
    
    let containerTypesObj={
        grid: 'display--grid grid-template-columns--2',
        flex: 'display--flex'
    },
        containerType = containerTypesObj.grid

    let alignItemsArr = [ 'baseline', 'center', 'end', 'start', 'stretch' ],
        alignItems = alignItemsArr[0]
</script>

<section>
    <h3 id="alignItems">Align items</h3>
    <p>
        The <b>align-items--{alignItemsArr.join('/')}</b> classes sets the <b>align-self--</b> classes value on all direct children as a group.
    </p>
    <div class="display--grid g-5">
        <div class="display--grid g-4">
            <b>Display</b>
            <div class="display--inline-flex flex-wrap--wrap g-3">
                {#each Object.entries(containerTypesObj) as [key, value]}
                    <Button
                        class={containerType === value ? 'active' : ''}
                        on:click={() => containerType = value}
                        disabled={containerType === value}
                    >{key}</Button>
                {/each}
            </div>
        </div>
        <div class="display--grid g-4">
            <b>Align</b>
            <div class="display--inline-flex flex-wrap--wrap g-3">
                {#each alignItemsArr as value }
                    <button
                        class="btn"
                        class:active={alignItems === value}
                        on:click={() => alignItems = value}
                        disabled={alignItems === value}
                    >align-items--{value}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="{containerType} g-3 p-3 align-items--{alignItems} background-color--positive border-radius--md height" style="--height: 16em; --p_h: 24em;">
                <div class="background-color--negative-10 px-2 py-1">one</div>
                <div class="background-color--negative-10 px-2 py-1">two</div>
                <div class="background-color--negative-10 px-2 py-1">three</div>
            </div>
        </div>
        <div class="display--grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="${containerType} align-items--${alignItems}">
    ...
</div>
`
                }
            </Precode>
        </div>
    </div>
</section>