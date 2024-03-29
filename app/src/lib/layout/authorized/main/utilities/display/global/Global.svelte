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
    <div class="display--grid gap--xs padding--xs background-color--positive border-radius--md">
        <div class="display--flex gap--xs">
            {#each displayGlobalArr as values }
                <Button
                    class="btn-secondary {displayGlobal === values ? 'active' : ''}"
                    on:click={() => displayGlobal = values}
                    disabled={displayGlobal === values}
                >{values}</Button>
            {/each}
        </div>
        <div class="display--grid gap--xs">
            <span class="display--{displayGlobal} background-color--negative-10 padding--md">span</span>
            <div class="display--{displayGlobal} background-color--negative-10 padding--md">div</div>
        </div>
    </div>
</section>