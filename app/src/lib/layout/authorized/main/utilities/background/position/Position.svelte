<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let bgPositionsArr: string[] = [ 'top-left', 'top', 'top-right', 'left', 'center', 'righ','bottom-left', 'bottom', 'bottom-right' ]
</script>

<section>
    <h3 id="backgroundPosition">Position</h3>
    <p>
        Add the <b>bgp-...</b> classes to container to work with background-position.
    </p>
    <div class="d-grid g-3 mb-4 p-3 cols-3 bgc-positive br">
        {#each bgPositionsArr as position }
            <div class="bgi bgc-negative-10 bgp-{position} p-8" style="--bgi: url(http://placekitten.com/32/32)"></div>
        {/each}
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
                {#each bgPositionsArr as position }
                    {
`<div class="bgi bgp-${position}" style="--bgi: url(http://placekitten.com/32/32)"></div>
`
                    }
                {/each}
            </Precode>
        </svelte:fragment>
    </Details>
</section>