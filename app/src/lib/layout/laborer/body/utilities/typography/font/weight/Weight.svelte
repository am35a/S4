<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<div>
    <h4 id="weight">Weight</h4>
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
</div>