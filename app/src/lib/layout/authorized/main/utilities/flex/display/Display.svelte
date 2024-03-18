<script>
    import Precode from 'component/Precode.svelte'

    let displayArr = ['inline-flex', 'flex'],
        display = displayArr[0]
</script>

<section>
    <h3 id="display">Display</h3>
    <p>
        To create a flex container select one of the following behaviors: <b>display--inline-flex</b> or <b>display--flex</b>.
    </p>
    <div class="display--grid g-5">
        <div class="display--grid g-4">
            <b>Display</b>
            <div class="display--inline-flex flex-wrap--wrap g-3">
                {#each displayArr as values }
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
            <div class="p-3 background-color--positive border-radius--md">
                <div class="display--{display} background-color--negative-10 p-2">{display}</div>
            </div>
        </div>
        <div class="display--grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="display--${display}"> ... </div>
`
                }
            </Precode>
        </div>
    </div>
</section>