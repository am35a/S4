<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let justifyContentArr = [ 'center', 'end', 'start', 'stretch', 'between', 'around', 'evenly' ]
</script>

<section class="d-grid g-4">
    <h3>Justify content</h3>
    <p>
        The <b>justify-content-...</b> properties defines how distributes space between and around content items along the main-axis of a <b>flex</b> container, and the inline axis of a <b>grid</b> container.
    </p>
    <div class="d-grid g-2 p-2 bg-positive rounded-md">
        <div class="d-grid g-2">
            {#each justifyContentArr as item }
                <div class="d-grid cols-2 g-2 bg-negative-10 p-2 justify-content-{item}">
                    <div class="bg-negative-10 px-2 py-1">one</div>
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
                {#each justifyContentArr as item }
{`
<div class="d-grid justify-content-${item}">
    <div>one</div>
    <div>two</div>
    <div>three</div>
</div>
`}
                {/each}
            </Precode>
        </svelte:fragment>
    </Details>
</section>