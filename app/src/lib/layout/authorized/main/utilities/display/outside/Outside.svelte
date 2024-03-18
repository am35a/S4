<script>
    import Precode from 'component/Precode.svelte'

    let displaysArr = ['inline', 'block']
    let display = displaysArr[1]
</script>

<section class="display--grid g-2">
    <h3 id="outside">Outside</h3>
    <p>
        These display values override the outside behavior of the elements.
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
                <div>
                    <span class="display--{display} background-color--negative-10 p-4">span</span>
                    <div class="display--{display} background-color--negative-10 p-4">div</div>
                </div>
            </div>
        </div>
        <div class="display--grid g-4">
            <b>HTML</b>
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