<script lang="ts">
    import Button from 'component/Button.svelte'

    let displayInsideArr: string[] = ['flow-root', 'flex', 'grid']
    let displayInside: string = displayInsideArr[0]
</script>

<section>
    <h3 id="displayInside">Inside</h3>
    <p>
        ...
    </p>
    <div class="d-grid g-2 p-2 bgc-positive rounded">
        <div class="d-flex g-2">
            {#each displayInsideArr as values }
                <Button
                    class="btn-secondary {displayInside === values ? 'active' : ''}"
                    on:click = {() => displayInside = values}
                    disabled = {displayInside === values}
                >d-{values}</Button>
            {/each}
        </div>
        <div class="d-grid g-2">
            <div class="d-{displayInside}">
                <span class="bgc-negative-10 p-4">span</span>
                <div class="bgc-negative-10 p-4">div</div>
            </div>
        </div>
    </div>
</section>