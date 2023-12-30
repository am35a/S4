<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let justifySelfArr: string[] = [ 'center', 'end', 'start', 'stretch' ]
</script>

<section>
    <h3 id="justifySelf">Justify self</h3>
    <p>
        The <b>js-...</b> utilities sets the way a box is justified inside its alignment container along the appropriate axis.
    </p>
    <div class="alert alert-warning js-start">
        The properties works only for <b>grid</b> containers!
    </div>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive br">
        {#each justifySelfArr as item }
            <div class="d-grid cols-2 g-2 bgc-negative-10 p-2">
                <div class="bgc-negative-10 px-2 py-1 js-{item}">one</div>
                <div class="bgc-negative-10 px-2 py-1">two</div>
                <div class="bgc-negative-10 px-2 py-1">three</div>
            </div>
        {/each}
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
                {#each justifySelfArr as item }
                    {
`<div class="d-grid">
    <div class="js-${item}">one</div>
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
