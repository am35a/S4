<script lang="ts">
    import Button from 'component/Button.svelte'

    let displayBoxArr: string[] = ['contents', 'none']
    let displayBox: string = displayBoxArr[0]
</script>

<section>
    <h3 id="displayBox">Box</h3>
    <p>
        ...
    </p>
    <div class="d-grid g-2 p-2 bgc-positive rounded">
        <div class="d-flex g-2">
            {#each displayBoxArr as values }
                <Button
                    class="btn-secondary {displayBox === values ? 'active' : ''}"
                    on:click = {() => displayBox = values}
                    disabled = {displayBox === values}
                >d-{values}</Button>
            {/each}
        </div>
        <div class="d-grid g-2">
            <div>
                <span class="d-{displayBox} bgc-negative-10 p-4">span</span>
                <div class="d-{displayBox} bgc-negative-10 p-4">div</div>
            </div>
        </div>
    </div>
</section>