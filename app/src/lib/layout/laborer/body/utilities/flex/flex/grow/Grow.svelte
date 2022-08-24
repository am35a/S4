<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let containerClasses: string = 'o-hidden fw-wrap'    
    let containerWidth: number = 100
</script>

<div class="d-grid g-2">
    <h4 id="flexGrow">Grow</h4>
    <p>
        The grow set up avaliable after add <b>f</b> class to elements into flex container. Use variable <b>--fg</b> to manage flex grow.
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
        <div class="d-flex {containerClasses} g-2 bgc-negative-10 p-4" style="width: {containerWidth}%;">
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 1">one</div>
            <div class="bgc-negative-10 px-2 py-1">two</div>
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 1">three</div>
        </div>
        <div class="d-flex {containerClasses} g-2 bgc-negative-10 p-4" style="width: {containerWidth}%;">
            <div class="bgc-negative-10 px-2 py-1">one</div>
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 1">two</div>
            <div class="bgc-negative-10 px-2 py-1">three</div>
        </div>
        <div class="d-flex {containerClasses} g-2 bgc-negative-10 p-4" style="width: {containerWidth}%;">
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 1">one</div>
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 1">two</div>
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 1">three</div>
        </div>
        <div class="d-flex {containerClasses} g-2 bgc-negative-10 p-4" style="width: {containerWidth}%;">
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 1">one</div>
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 2">two</div>
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 3">three</div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {
`<div class="d-flex">
    <div class="fg" style="--fg: 1">one</div>
    <div>simple two</div>
    <div class="fg" style="--fg: 1">three</div>
</div>
<div class="d-flex g-2 bgc-negative-10 p-4">
    <div>simple one</div>
    <div class="fg" style="--fg: 1">two</div>
    <div>simple three</div>
</div>
<div class="d-flex g-2 bgc-negative-10 p-4">
    <div class="fg" style="--fg: 1">one</div>
    <div class="fg" style="--fg: 1">two</div>
    <div class="fg" style="--fg: 1">three</div>
</div>
<div class="d-flex g-2 bgc-negative-10 p-4">
    <div class="fg" style="--fg: 1">one</div>
    <div class="fg" style="--fg: 2">two</div>
    <div class="fg" style="--fg: 3">three</div>
</div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</div>