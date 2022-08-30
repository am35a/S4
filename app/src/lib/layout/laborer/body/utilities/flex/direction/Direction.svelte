<script lang="ts">
    import Precode from "component/Precode.svelte"
    import Details from "component/Details.svelte"

    let flexDirectionsArr: string[] = ['row', 'row-reverse', 'column', 'column-reverse']
</script>

<section>
    <h3 id="flexDirection">Direction</h3>
    <p>
        The <b>fd-...</b> styles sets direction of an elements into flex container.
    </p>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive br">
        {#each flexDirectionsArr as direction }
            <div class="d-flex fd-{direction} g-4 bgc-negative-10 p-4">
                <div class="bgc-negative-10 px-2 py-1">one</div>
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
                {#each flexDirectionsArr as direction}
                    {
`<div class="d-flex fd-${direction}">
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