<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>
<section>
    <h2>Overflow</h2>
    <p>
        ...
    </p>
    <div class="d-grid g-2 p-2 bgc-positive br">
        ...
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
</section>