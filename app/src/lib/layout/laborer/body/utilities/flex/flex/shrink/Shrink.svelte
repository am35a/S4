<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let containerClasses: string = 'o-hidden fw-wrap'    
    let containerWidth: number = 100
</script>

<div class="d-grid g-2">
    <h4 id="flexShrink">Shrink</h4>
    <p>
        <!-- The <b>f-[fill/equal/grow-(0/1)/shrink-(0/1)]</b> classes sets size of items in flex container. -->
    </p>
    <div class="d-grid g-2 p-2 bgc-positive rounded">
        <div class="d-grid">
            <label for="containerClasses">Container classes:</label>
            <input
                id="containerClasses"
                class="border"
                bind:value={containerClasses}
                type="text"
            >
        </div>
        <div class="d-grid">
            <label for="containerWidth">Container width {containerWidth}%:</label>
            <input type="range" name="containerWidth" min={0} max={100} step={1} bind:value={containerWidth}>
        </div>
        <div class="d-flex {containerClasses} g-2 bgc-negative-10 p-4 ox-hidden" style="width: {containerWidth}%;">
            <div class="bgc-negative-10 px-2 py-1">one</div>
            <div class="f bgc-negative-10 px-2 py-1" style="--fs: 1; width: 250rem;">two</div>
            <div class="bgc-negative-10 px-2 py-1">three</div>
        </div>
        <div class="d-flex {containerClasses} g-2 bgc-negative-10 p-4 ox-hidden" style="width: {containerWidth}%;">
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 1">one</div>
            <div class="bgc-negative-10 px-2 py-1" style="width: 150rem;">two</div>
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 1">three</div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {
`<div class="d-flex ox-hidden">
    <div>one</div>
    <div class="f" style="--fs: 1; width: 250rem;">two</div>
    <div>three</div>
</div>
<div class="d-flex ox-hidden">
    <div class="f" style="--fg: 1">one</div>
    <div style="width: 150rem;">two</div>
    <div class="f" style="--fg: 1">three</div>
</div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</div>