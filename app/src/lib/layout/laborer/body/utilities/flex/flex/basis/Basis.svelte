<script lang="ts">
    import Button from 'component/Button.svelte'
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let flexBasisArr: string[] = ['100', 'fill', 'max', 'min', 'fit']
    let flexBasis: string = flexBasisArr[0]

    let containerWidth: number = 100
</script>

<div class="d-grid g-2">
    <h4 id="flexBasis">Basis</h4>
    <p>
        ...
    </p>
    <div class="d-grid">
        <label for="containerWidth">Container width {containerWidth}%:</label>
        <input type="range" name="containerWidth" min={0} max={100} step={1} bind:value={containerWidth}>
    </div>

    <div class="d-grid g-2 p-2 bgc-positive rounded">
        <div class="d-flex g-2">
            {#each flexBasisArr as values }
                <Button
                    class="btn-secondary {flexBasis === values ? 'active' : ''}"
                    on:click = {() => flexBasis = values}
                    disabled = {flexBasis === values}
                >fb-{values}</Button>
            {/each}
        </div>
        <!-- <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="fb-{flexBasis} bgc-negative-10 px-2 py-1">fb-{flexBasis} one</div>
            <div class="fg bgc-negative-10 px-2 py-1">simple two</div>
            <div class="fg bgc-negative-10 px-2 py-1">simple three</div>
        </div> -->
        <div class="d-flex g-2 bgc-negative-10 p-4" style="width: {containerWidth}%;">
            <div class="f bgc-negative-10 px-2 py-1" style="--fb: 100%;">100% one</div>
            <div class="bgc-negative-10 px-2 py-1">two</div>
            <div class="bgc-negative-10 px-2 py-1">three</div>
        </div>
        <div class="d-flex g-2 bgc-negative-10 p-4" style="width: {containerWidth}%;">
            <div class="f bgc-negative-10 px-2 py-1" style="--fb: 100%;">equal one</div>
            <div class="f bgc-negative-10 px-2 py-1" style="--fb: 100%;">equal two</div>
            <div class="f bgc-negative-10 px-2 py-1" style="--fb: 100%;">equal three</div>
        </div>
        <div class="d-flex g-2 bgc-negative-10 p-4" style="width: {containerWidth}%;">
            <div class="f bgc-negative-10 px-2 py-1" style="--fb: 25%">fb 25% one</div>
            <div class="bgc-negative-10 px-2 py-1">two</div>
            <div class="bgc-negative-10 px-2 py-1">three</div>
        </div>
    </div>
</div>