<script>
    export let anchorsObj={}
</script>

<div class="d-flex g-1 background-color--positive p-2 w-fit ms-auto br-lg bs-sm border border-negative-30 fs-xs">
    {#if Object.keys(anchorsObj).length}
        <div class="d-flex fw-wrap g-1 w-fit ms-auto">
            {#each Object.entries(anchorsObj) as [anchor, name]}
                <button
                    class="btn btn-primary btn-alt"
                    on:click={() => window.open(`#${anchor}`, '_self')}
                >{name}</button>
            {/each}
        </div>
    {/if}
    <button
        class="btn btn-ico"
        on:click={() => window.open('#', '_self')}
    ><span class="ico" style="--ico-image: url(/icons/arrow-top-big.svg);"></span></button>
</div>
