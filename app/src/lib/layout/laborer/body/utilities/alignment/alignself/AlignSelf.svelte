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

<section id="containerType" class="d-grid g-2">
    <h3 id="AlignSelf">Align self</h3>
    <p>
        The <b>align-self-...</b> classes overrides a <b>grid</b> or <b>flex</b> item's <b>align-items-</b> classes value.
    </p>
    <div class="d-grid g-2 p-2 bg-positive rounded">
        <div class="d-flex g-2">
            {#each Object.entries(containerTypeObj) as [key, value]}
                <Button
                    class="btn-secondary {containerType === value ? 'active' : ''}"
                    on:click = {() => containerType = value}
                    disabled={containerType === value}
                >{key}</Button>
            {/each}
        </div>
        <div class="d-grid g-2">
            {#each alignSelfArr as item }
                <div class="{containerType} g-2 bg-negative-10 p-2" style="height: 160rem;">
                    <div class="bg-negative-10 px-2 py-1 align-self-{item}">one</div>
                    <div class="bg-negative-10 px-2 py-1">two</div>
                    <div class="bg-negative-10 px-2 py-1">three</div>
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
    <div class="align-self-${item}">one</div>
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
