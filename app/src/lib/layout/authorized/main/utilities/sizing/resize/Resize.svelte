<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

</script>

<section>
    <h3 id="resize">Resize</h3>
    <p>
        The <b>rs-both</b> class set as default for textarea resizing.
    </p>
    <div class="display--grid g-3 mb-4 p-3 background-color--positive border-radius--md">
        <textarea class="rs-horizontal rounded background-color--negative-10 border-radius--md">rs-horizontal</textarea>
        <textarea class="rs-vertical rounded background-color--negative-10 border-radius--md">rs-vertical</textarea>
        <textarea class="rs-none rounded background-color--negative-10 border-radius--md">rs-none</textarea>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="border-radius--top-0">
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