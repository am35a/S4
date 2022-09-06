<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<section>
    <h3 id="lineHight">Line height</h3>
    <p>
        ...
    </p>
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