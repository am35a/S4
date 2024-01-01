<script>
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<section>
    <h3 id="transform">Transform</h3>
    <p>
        Standard text manipulation
    </p>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive br">
        <strong>strong</strong>,
        <i>italik</i>,
        <sub>sub</sub>,
        <sup>sup</sup>,
        <small>small</small>,
        <span class="tt-lowercase">LOWERCASE</span>,
        <span class="tt-uppercase">uppercase</span>,
        <span class="tt-capitalize">capitalize</span>,
        <span class="tt-underline">underline</span>,
        <span class="tt-line-through">line-through</span>.
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
                ...
            </Precode>
        </svelte:fragment>
    </Details>
</section>