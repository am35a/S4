<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let containerClasses: string = 'o-hidden fw-wrap'    
    let containerWidth: number = 100
</script>

<div>
    <h4 id="flexGrow">Grow</h4>
    <p>
        The grow set up avaliable after add <b>fg</b> or <b>f</b> classe to elements into flex container. Use variable <b>--fg</b> to manage flex grow.
    </p>
    <div class="alert alert-info">
        Default variable of flex-grow is 0. Class <b>fg</b> convert variable to 1.  
    </div>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive br">
        <div class="d-grid g-2">
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
        </div>
        <div class="d-flex {containerClasses} g-4 bgc-negative-10 p-4" style="width: {containerWidth}%;">
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 1">one</div>
            <div class="bgc-negative-10 px-2 py-1">two</div>
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 1">three</div>
        </div>
        <div class="d-flex {containerClasses} g-4 bgc-negative-10 p-4" style="width: {containerWidth}%;">
            <div class="bgc-negative-10 px-2 py-1">one</div>
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 1">two</div>
            <div class="bgc-negative-10 px-2 py-1">three</div>
        </div>
        <div class="d-flex {containerClasses} g-4 bgc-negative-10 p-4" style="width: {containerWidth}%;">
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
            <Precode class="br-top-0">
                {
`<div class="d-flex">
    <div class="f" style="--fg: 1">one</div>
    <div>simple two</div>
    <div class="f" style="--fg: 1">three</div>
</div>
<div class="d-flex g-2 bgc-negative-10 p-4">
    <div>simple one</div>
    <div class="f" style="--fg: 1">two</div>
    <div>simple three</div>
</div>
<div class="d-flex g-2 bgc-negative-10 p-4">
    <div class="f" style="--fg: 1">one</div>
    <div class="f" style="--fg: 1">two</div>
    <div class="f" style="--fg: 1">three</div>
</div>
<div class="d-flex g-2 bgc-negative-10 p-4">
    <div class="f" style="--fg: 1">one</div>
    <div class="f" style="--fg: 2">two</div>
    <div class="f" style="--fg: 3">three</div>
</div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</div>