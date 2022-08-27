<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
    import Button from 'component/Button.svelte'
    
    let containerTypesObj = {
        grid: 'd-grid cols-2',
        flex: 'd-flex'
    }
    let containerType:string = containerTypesObj.grid

    let alignItemsArr: string[] = [ 'baseline', 'center', 'end', 'start', 'stretch' ]
</script>

<section>
    <h3 id="AlignItems">Align items</h3>
    <p>
        The <b>ai-...</b> classes sets the <b>as-</b> classes value on all direct children as a group.
    </p>
    <div class="d-grid g-4 mb-4 p-4 bgc-positive rounded">
        <div class="d-flex g-4">
            {#each Object.entries(containerTypesObj) as [key, value]}
                <Button
                    class="btn-secondary {containerType === value ? 'active' : ''}"
                    on:click = {() => containerType = value}
                    disabled = {containerType === value}
                >{key}</Button>
            {/each}
        </div>
        <div class="d-grid g-4">
            {#each alignItemsArr as item }
                <div class="{containerType} g-2 bgc-negative-10 p-2 ai-{item}" style="height: 160rem;">
                    <div class="bgc-negative-10 px-2 py-1">one</div>
                    <div class="bgc-negative-10 px-2 py-1">two</div>
                    <div class="bgc-negative-10 px-2 py-1">three</div>
                </div>
            {/each}
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {#each alignItemsArr as item }
                    {
`<div class="${containerType} ai-${item}">
    <div>one</div>
    <div>two</div>
    <div>three</div>
</div>
`
                    }
                {/each}
            </Precode>
        </svelte:fragment>
    </Details>
</section>