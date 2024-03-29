<script>
    import Precode from 'component/Precode.svelte'

    let displayArr = ['inline-flex', 'flex'],
        display = displayArr[0]
</script>

<section>
    <h3 id="display">Display</h3>
    <p>
        To create a flex container select one of the following behaviors: <b>display--inline-flex</b> or
        <b>display--flex</b>.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Display</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
                {#each displayArr as value}
                    <button
                        class="btn"
                        class:active={display === value}
                        on:click={() => display = value}
                        disabled={display === value}
                    >{value}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="padding--sm background-color--positive border-radius--md">
                <div class="display--{display} background-color--negative-10 padding--xs">{display}</div>
            </div>
        </div>
        <div class="display--grid gap--md">
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