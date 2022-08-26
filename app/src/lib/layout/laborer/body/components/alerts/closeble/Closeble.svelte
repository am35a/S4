<script lang="ts">
    import Alert from 'component/Alert.svelte'
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<section>
    <h3 id="closeble">Closeble</h3>
    <p>
        To add a close button for killing an alerts add the "alert-closable" class name.
    </p>
    <div class="d-grid g-4 p-4 mb-4 bgc-positive rounded">
        <Alert class="alert-primary alert-closable">
            Click the close icon in the top right corner to destroy the block of alert message.
        </Alert>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {
`<Alert class="alert-primary alert-closable">...</Alert>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>
