<script lang="ts">
    import Precode from "component/Precode.svelte"
    import Details from "component/Details.svelte"
</script>

<article>
    <h2 id="sizing">Sizing</h2>
    <p>
        ...
    </p>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive br o-hidden">
        <div class="bgc-negative-10 px-2 py-1 w-25">w-25</div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
                {
`...
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</article>