<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
    import Button from 'component/Button.svelte'

    let containerTypeObj = {
        grid: 'd-grid cols-2',
        flex: 'd-flex'
    }
    let containerType:string = containerTypeObj.grid

    let alignSelfArr: string[] = [ 'baseline', 'center', 'end', 'start', 'stretch' ]
</script>

<section>
    <h3 id="alignSelf">Align self</h3>
    <p>
        The <b>as-...</b> classes overrides a <b>grid</b> or <b>flex</b> item's <b>ai-</b> classes value.
    </p>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive rounded">
        <div class="d-flex g-2">
            {#each Object.entries(containerTypeObj) as [key, value]}
                <Button
                    class="btn-secondary {containerType === value ? 'active' : ''}"
                    on:click = {() => containerType = value}
                    disabled={containerType === value}
                >{key}</Button>
            {/each}
        </div>
        <div class="d-grid g-3">
            {#each alignSelfArr as item }
                <div class="{containerType} g-2 bgc-negative-10 p-2" style="height: 160rem;">
                    <div class="bgc-negative-10 px-2 py-1 as-{item}">one</div>
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
                {#each alignSelfArr as item }
                    {
`<div class="${containerType}">
    <div class="as-${item}">one</div>
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
