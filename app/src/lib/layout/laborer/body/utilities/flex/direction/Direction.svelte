<script lang="ts">
    import Precode from "component/Precode.svelte"
    import Details from "component/Details.svelte"

    let flexDirectionsArr: string[] = ['row', 'row-reverse', 'column', 'column-reverse']
</script>

<section class="d-grid g-2">
    <h3 id="flexDirection">Direction</h3>
    <p>
        ...
    </p>
    <div class="d-grid g-2 p-2 bgc-positive rounded">
        {#each flexDirectionsArr as direction }
            <div class="d-flex f-{direction} g-2 bgc-negative-10 p-2">
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
            <Precode class="rounded-top-0">
                {#each flexDirectionsArr as direction }
                    {
`<div class="d-flex f-${direction}">
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