<script>
    import Button from 'component/Button.svelte'

    let displayGlobalArr = ['inherit', 'initial', 'revert', 'unset']
    let displayGlobal = displayGlobalArr[0]
</script>

<section>
    <h3 id="displayGlobal">Global</h3>
    <p>
        ...
    </p>
    <div class="display--grid g-2 p-2 background-color--positive border-radius--md">
        <div class="display--flex g-2">
            {#each displayGlobalArr as values }
                <Button
                    class="btn-secondary {displayGlobal === values ? 'active' : ''}"
                    on:click={() => displayGlobal = values}
                    disabled={displayGlobal === values}
                >d-{values}</Button>
            {/each}
        </div>
        <div class="display--grid g-2">
            <span class="d-{displayGlobal} background-color--negative-10 p-4">span</span>
            <div class="d-{displayGlobal} background-color--negative-10 p-4">div</div>
        </div>
    </div>
</section>