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
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Display</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
                {#each Object.entries(containerTypesObj) as [key, value]}
                    <Button
                        class={containerType === value ? 'active' : ''}
                        on:click={() => containerType = value}
                        disabled={containerType === value}
                    >{key}</Button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Align</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
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
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="{containerType} gap--sm padding--sm align-items--{alignItems} background-color--positive border-radius--md height" style="--height: 16em; --p_height: 24em;">
                <div class="background-color--negative-10 padding-x--xs padding-y--xxs">one</div>
                <div class="background-color--negative-10 padding-x--xs padding-y--xxs">two</div>
                <div class="background-color--negative-10 padding-x--xs padding-y--xxs">three</div>
            </div>
        </div>
        <div class="display--grid gap--md">
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