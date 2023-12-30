<script lang="ts">
    import Button from 'component/Button.svelte'

    let displayGlobalArr: string[] = ['inherit', 'initial', 'revert', 'unset']
    let displayGlobal: string = displayGlobalArr[0]
</script>

<section>
    <h3 id="displayGlobal">Global</h3>
    <p>
        ...
    </p>
    <div class="d-grid g-2 p-2 bgc-positive br">
        <div class="d-flex g-2">
            {#each displayGlobalArr as values }
                <Button
                    class="btn-secondary {displayGlobal === values ? 'active' : ''}"
                    on:click = {() => displayGlobal = values}
                    disabled = {displayGlobal === values}
                >d-{values}</Button>
            {/each}
        </div>
        <div class="d-grid g-2">
            <span class="d-{displayGlobal} bgc-negative-10 p-4">span</span>
            <div class="d-{displayGlobal} bgc-negative-10 p-4">div</div>
        </div>
    </div>
</section>