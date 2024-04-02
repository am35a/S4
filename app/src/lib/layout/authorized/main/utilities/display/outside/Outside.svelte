<script>
    import Precode from 'component/Precode.svelte'

    let displaysArr = ['inline', 'block']
    let display = displaysArr[1]
</script>

<section class="display--grid gap--xs">
    <h3 id="outside">Outside</h3>
    <p>
        These display values override the outside behavior of the elements.
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
                <div>
                    <span class="display--{display} background-color--negative-10 padding--md">span</span>
                    <div class="display--{display} background-color--negative-10 padding--md">div</div>
                </div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
            <Precode>
                {
`<div>
    <span class="display--${display}">span</span>
    <div class="display--${display}">div</div>
</div>
`
                }
            </Precode>
        </div>
    </div>
</section>