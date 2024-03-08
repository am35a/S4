<script>
    import Precode from 'component/Precode.svelte'

    let displayFlexArr = ['inline-flex', 'flex'],
        displayFlex = displayFlexArr[0]
</script>

<section>
    <h3 id="display">Display</h3>
    <p>
        To create a flex container select one of the following behaviors: <b>d-inline-flex</b> or <b>d-flex</b>.
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Display</b>
            <div class="d-inline-flex fw-wrap g-3">
                {#each displayFlexArr as values }
                    <button
                        class="btn"
                        class:active={displayFlex === values}
                        on:click={() => displayFlex = values}
                        disabled={displayFlex === values}
                    >d-{values}</button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="p-3 background-color--positive br-md">
                <div class="d-{displayFlex} background-color--negative-10 p-2">{displayFlex} container</div>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="d-${displayFlex}">
    // ...
</div>
`
                }
            </Precode>
        </div>
    </div>
</section>