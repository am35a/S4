<script lang="ts">
    import Button from 'component/Button.svelte'

    let displayLegacyArr: string[] = ['inline-block', 'inline-flex', 'inline-grid']
    let displayLegacy: string = displayLegacyArr[0]
</script>

<section>
    <h3 id="displayLegacy">Legacy</h3>
    <p>
        ...
    </p>
    <div class="d-grid g-2 p-2 bgc-positive rounded">
        <div class="d-flex g-2">
            {#each displayLegacyArr as values }
                <Button
                    class="btn-secondary {displayLegacy === values ? 'active' : ''}"
                    on:click = {() => displayLegacy = values}
                    disabled = {displayLegacy === values}
                >d-{values}</Button>
            {/each}
        </div>
        <div class="d-grid g-2">
            <div class="d-{displayLegacy}">
                <span class="bgc-negative-10 p-4">span</span>
                <div class="bgc-negative-10 p-4">div</div>
            </div>
        </div>
    </div>
</section>