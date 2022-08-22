<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let containerWidth: number = 100
</script>

<section class="d-grid g-2">
    <h3 id="flexShrink">Shrink</h3>
    <p>
        <!-- The <b>f-[fill/equal/grow-(0/1)/shrink-(0/1)]</b> classes sets size of items in flex container. -->
    </p>
    <div class="d-grid">
        <label for="containerWidth">Container width {containerWidth}%:</label>
        <input type="range" name="containerWidth" min={0} max={100} step={1} bind:value={containerWidth}>
    </div>
    <div class="d-grid g-2 p-2 bgc-positive rounded">
        <div class="d-flex g-2 bgc-negative-10 p-4 overflow-x-hidden" style="width: {containerWidth}%;">
            <div class="bgc-negative-10 px-2 py-1">one</div>
            <div class="fs bgc-negative-10 px-2 py-1" style="width: 250rem;">fs two</div>
            <div class="bgc-negative-10 px-2 py-1">three</div>
        </div>
        <div class="d-flex g-2 bgc-negative-10 p-4 overflow-x-hidden" style="width: {containerWidth}%;">
            <div class="fg bgc-negative-10 px-2 py-1">one</div>
            <div class="fs-0 bgc-negative-10 px-2 py-1" style="width: 150rem;">fs two</div>
            <div class="fg bgc-negative-10 px-2 py-1">three</div>
        </div>
        <div class="d-flex g-2 bgc-negative-10 p-4 overflow-x-hidden" style="width: {containerWidth}%;">
            <div class="fg fs fb bgc-negative-10 px-2 py-1" style="--fg: 1; --fs: 1; --fb: 250rem;">fs two</div>
            <div class="fg fs fb bgc-negative-10 px-2 py-1" style="--fg: 2; --fs: 2; --fb: 250rem;">three</div>
        </div>
        <!-- <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="bgc-negative-10 px-2 py-1 f-equal">equal one</div>
            <div class="bgc-negative-10 px-2 py-1">two</div>
            <div class="bgc-negative-10 px-2 py-1">three</div>
        </div>
        <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="bgc-negative-10 px-2 py-1 f-fill">fill one</div>
            <div class="bgc-negative-10 px-2 py-1 f-fill">fill two</div>
            <div class="bgc-negative-10 px-2 py-1 f-fill">fill three</div>
        </div>
        <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="bgc-negative-10 px-2 py-1 f-equal">equal one</div>
            <div class="bgc-negative-10 px-2 py-1 f-equal">equal two</div>
            <div class="bgc-negative-10 px-2 py-1 f-equal">equal three</div>
        </div>
        <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="bgc-negative-10 px-2 py-1 fg">grow-1 one</div>
            <div class="bgc-negative-10 px-2 py-1">simple two</div>
            <div class="bgc-negative-10 px-2 py-1">simple three</div>
        </div>
        <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="bgc-negative-10 px-2 py-1 w-100">w-100 one</div>
            <div class="bgc-negative-10 px-2 py-1 fs">shrink-0 two</div>
            <div class="bgc-negative-10 px-2 py-1">simple three</div>
        </div>
        <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="bgc-negative-10 px-2 py-1 w-100">w-100 one</div>
            <div class="bgc-negative-10 px-2 py-1 fs">shrink-1 two</div>
            <div class="bgc-negative-10 px-2 py-1">simple three</div>
        </div> -->
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {
`<div class="d-flex">
    <div class="f-fill">fill one</div>
    <div>two</div>
    <div>three</div>
</div>
<div class="d-flex">
    <div class="f-equal">equal one</div>
    <div>two</div>
    <div>three</div>
</div>
<div class="d-flex">
    <div class="f-fill">fill one</div>
    <div class="f-fill">fill two</div>
    <div class="f-fill">fill three</div>
</div>
<div class="d-flex">
    <div class="f-equal">equal one</div>
    <div class="f-equal">equal two</div>
    <div class="f-equal">equal three</div>
</div>
<div class="d-flex">
    <div class="fg">grow-1 one</div>
    <div>simple two</div>
    <div>simple three</div>
</div>
<div class="d-flex">
    <div class="w-100">w-100 one</div>
    <div class="fs">shrink-0 two</div>
    <div>simple three</div>
</div>
<div class="d-flex">
    <div class="w-100">w-100 one</div>
    <div class="fs">shrink-1 two</div>
    <div>simple three</div>
</div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>