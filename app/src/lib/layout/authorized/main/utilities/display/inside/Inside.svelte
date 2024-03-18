<script>
    import Precode from 'component/Precode.svelte'

    let displaysArr = ['flow-root', 'flex', 'grid']
    let display = displaysArr[0]
</script>

<section class="display--grid g-2">
    <h3 id="inside">Inside</h3>
    <p>
        These display values override the behavior of the elements.
    </p>
    <div class="display--grid g-5">
        <div class="display--grid g-4">
            <b>Display</b>
            <div class="display--inline-flex fw-wrap g-3">
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
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="display--grid g-3 p-3 background-color--positive border-radius--md">
                {#if display === displaysArr[0]}
                    <div>
                        <span class="float--left background-color--negative-10 p-4">span</span>
                        <div class="display--{display} background-color--negative-10 p-4">div</div>
                    </div>
                {:else} 
                    <div class="display--{display}">
                        <span class="background-color--negative-10 p-4">span</span>
                        <div class="background-color--negative-10 p-4">div</div>
                    </div>
                {/if}
            </div>
        </div>
        <div class="display--grid g-4">
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