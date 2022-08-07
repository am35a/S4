<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let justifyItemsArr: string[] = [ 'center', 'end', 'start', 'stretch' ]
</script>

<section class="d-grid g-4">
    <h3 id="JustifyItems">Justify items</h3>
    <p>
        The <b>ji-...</b> classes work for all items inside container, giving them all a default way of justifying each box along the appropriate axis.
    </p>
    <div class="alert alert-warning js-start">
        The properties works only for <b>grid</b> containers!
    </div>
    <div class="d-grid g-2 p-2 bgc-positive rounded">
        <div class="d-grid g-2">
            {#each justifyItemsArr as item }
                <div class="d-grid cols-2 g-2 bgc-negative-10 p-2 ji-{item}">
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
                {#each justifyItemsArr as item }
                    {
`<div class="d-grid ji-${item}">
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