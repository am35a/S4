<script>
    import Precode from 'component/Precode.svelte'

    let displaysArr = ['flow-root', 'flex', 'grid']
    let display = displaysArr[0]
</script>

<section class="display--grid gap--xs">
    <h3 id="inside">Inside</h3>
    <p>
        These display values override the behavior of the elements.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Display</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
                {#each displaysArr as values }
                    <button
                        class="btn"
                        class:active={display === values}
                        on:click={() => display = values}
                        disabled={display === values}
                    >{values}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                {#if display === displaysArr[0]}
                    <div>
                        <span class="float--left background-color--negative-10 padding--md">span</span>
                        <div class="display--{display} background-color--negative-10 padding--md">div</div>
                    </div>
                {:else} 
                    <div class="display--{display}">
                        <span class="background-color--negative-10 padding--md">span</span>
                        <div class="background-color--negative-10 padding--md">div</div>
                    </div>
                {/if}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>HTML</b>
            <Precode>
                {#if display === displaysArr[0]}
                    {
`<div>
    <span class="float--left"> ... </span>
    <div class="display--${display}"> ... </div>
</div>
`
                    }
                {:else}
                    {
`<div class="display--${display}">
    <span> ... </span>
    <div> ... </div>
</div>
`
                    }
                {/if}
            </Precode>
        </div>
    </div>
</section>