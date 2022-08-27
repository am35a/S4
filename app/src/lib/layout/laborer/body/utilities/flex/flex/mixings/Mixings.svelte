<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let containerWidth: number = 100
</script>

<div>
    <h4 id="flexMixings">Mixings</h4>
    <p>
        The mixing examples.
    </p>
    <div class="d-grid g-4 mb-4 p-4 bgc-positive rounded">
        <div class="d-grid">
            <label for="containerWidth">Container width {containerWidth}%:</label>
            <input type="range" name="containerWidth" min={0} max={100} step={1} bind:value={containerWidth}>
        </div>
        <div class="d-flex g-4 bgc-negative-10 p-4 ox-hidden" style="width: {containerWidth}%;">
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 1; --fs: 1; --fb: 250rem;">two</div>
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 2; --fs: 2; --fb: 250rem;">three</div>
        </div>
        <div class="d-flex g-4 bgc-negative-10 p-4" style="width: {containerWidth}%;">
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 1; --fb: 0; ">equal one</div>
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 1; --fb: 0; ">equal two</div>
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 1; --fb: 0; ">equal three</div>
        </div>
        <div class="d-flex g-4 bgc-negative-10 p-4" style="width: {containerWidth}%;">
            <div class="bgc-negative-10 px-2 py-1 w-100">w-100 one</div>
            <div class="bgc-negative-10 px-2 py-1 f" style="--fs: 0;">shrink-1 two</div>
            <div class="bgc-negative-10 px-2 py-1">simple three</div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {
`
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</div>