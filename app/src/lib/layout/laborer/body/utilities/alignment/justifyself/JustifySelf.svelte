<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let justifySelfArr: string[] = [ 'center', 'end', 'start', 'stretch' ]
</script>

<section class="d-grid g-2">
    <h3 id="JustifySelf">Justify self</h3>
    <p>
        The <b>js-...</b> utilities sets the way a box is justified inside its alignment container along the appropriate axis.
    </p>
    <div class="alert alert-warning js-start">
        The properties works only for <b>grid</b> containers!
    </div>
    <div class="d-grid g-2 p-2 bg-positive rounded">
        <div class="d-grid g-2">
            {#each justifySelfArr as item }
                <div class="d-grid cols-2 g-2 bg-negative-10 p-2">
                    <div class="bg-negative-10 px-2 py-1 js-{item}">one</div>
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
