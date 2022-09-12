<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

</script>

<section>
    <h3 id="resize">Resize</h3>
    <p>
        The <b>rs-both</b> class set as default for textarea resizing.
    </p>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive br">
        <textarea class="rs-horizontal rounded bgc-negative-10 br">rs-horizontal</textarea>
        <textarea class="rs-vertical rounded bgc-negative-10 br">rs-vertical</textarea>
        <textarea class="rs-none rounded bgc-negative-10 br">rs-none</textarea>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
                {
`<textarea class="rs-horizontal">rs-horizontal</textarea>
<textarea class="rs-vertical">rs-vertical</textarea>
<textarea class="rs-none">rs-none</textarea>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>