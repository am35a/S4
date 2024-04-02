<script>
    // https://github.com/ayndqy/svelte-micro/issues/19
    
    export let anchorsObj={}
</script>

<div class="
    display--flex
    gap--xs
    margin-left--auto
    padding--xs
    width--fit
    background-color--positive
    border-radius--lg
    box-shadow--sm
    border-style--solid
    border-color--negative-30
    font-size--xs"
>
    {#if Object.keys(anchorsObj).length}
        <div class="display--flex flex-wrap--wrap gap--xxs width--fit margin-left--auto">
            {#each Object.entries(anchorsObj) as [anchor, name]}
                <button
                    class="btn btn-primary"
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
