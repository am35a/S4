<script>
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<section>
    <h3 id="transform">Transform</h3>
    <p>
        Standard text manipulation
    </p>
    <div class="d-grid g-3 mb-4 p-3 background-color--positive border-radius--md">
        <div>Simple text before <strong>strong</strong> and after.</div>
        <div>Simple text before <i>italik</i> and after.</div>
        <div>Simple text before <sub>sub</sub> and after.</div>
        <div>Simple text before <sup>sup</sup> and after.</div>
        <div>Simple text before <small>small</small> and after.</div>
        <div>Simple text before <span class="tt-lowercase">LOWERCASE</span> and after.</div>
        <div>Simple text before <span class="tt-uppercase">uppercase</span> and after.</div>
        <div>Simple text before <span class="tt-capitalize">capitalize</span> and after.</div>
        <div>Simple text before <span class="tt-underline">underline</span> and after.</div>
        <div>Simple text before <span class="tt-line-through">line-through</span> and after.</div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="border-radius--top-0">
                {
`Simple text before <strong>strong</strong> and after.
Simple text before <i>italik</i> and after.
Simple text before <sub>sub</sub> and after.
Simple text before <sup>sup</sup> and after.
Simple text before <small>small</small> and after.
Simple text before <span class="tt-lowercase">LOWERCASE</span> and after.
Simple text before <span class="tt-uppercase">uppercase</span> and after.
Simple text before <span class="tt-capitalize">capitalize</span> and after.
Simple text before <span class="tt-underline">underline</span> and after.
Simple text before <span class="tt-line-through">line-through</span> and after.
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>