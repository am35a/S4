<script>
    import Precode from 'component/Precode.svelte'

    let flexBasisArr = ['100', 'fill', 'fit', 'max', 'min'],
        flexBasis = flexBasisArr[0]

    let containerClasses = '',
        containerWidth = 100
</script>

<div>
    <h4 id="flexBasis">Basis</h4>
    <p>
        The <b>fb-{flexBasisArr.join('/')}</b> classes help to change width of items in a flex container.
        Also the basis set up avaliable after add <b>fx</b> class to elements into flex container ans using
        variable <b>--fxb</b> to manage width.
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Basis</b>
            <div class="d-inline-flex fw-wrap g-3">
                {#each flexBasisArr as values }
                    <button
                        class="btn"
                        class:active={flexBasis === values}
                        on:click={() => flexBasis = values}
                        disabled={flexBasis === values}
                    >fb-{values}</button>
                {/each}
            </div>
        </div>        
        <div class="d-grid g-4">
            <b>Customize container</b>
            <input
                class="frm"
                bind:value={containerClasses}
                type="text"
                placeholder="Type utility classes to customizing the container"
            >
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid g-3 p-3 background-color--positive border-radius--md">
                <div class="d-grid mb-2">
                    <label for="basisContainerWidth" class="d-grid gtc-3 align-items--end px-2">
                        <small class="ta-start">min</small>
                        <div class="ta-center">Width {containerWidth}%</div>
                        <small class="ta-end">max</small>
                    </label>
                    <input
                        class="frm"
                        id="basisContainerWidth"
                        min={0}
                        max={100}
                        step={1}
                        bind:value={containerWidth}
                        type="range"
                    >
                </div>
                    <div class="d-flex {containerClasses} g-2 background-color--negative-10 p-2" style="width: {containerWidth}%;">
                    <div class="fb-{flexBasis} background-color--negative-10 px-2 py-1">fb-{flexBasis} one</div>
                    <div class="background-color--negative-10 px-2 py-1">simple two</div>
                    <div class="background-color--negative-10 px-2 py-1">simple three</div>
                </div>
                <div class="d-flex {containerClasses} g-2 background-color--negative-10 p-2" style="width: {containerWidth}%;">
                    <div class="fx background-color--negative-10 px-2 py-1" style="--fxb: 100%;">100% one</div>
                    <div class="background-color--negative-10 px-2 py-1">two</div>
                    <div class="background-color--negative-10 px-2 py-1">three</div>
                </div>
                <div class="d-flex {containerClasses} g-2 background-color--negative-10 p-2" style="width: {containerWidth}%;">
                    <div class="fx background-color--negative-10 px-2 py-1" style="--fxb: 100%;">equal one</div>
                    <div class="fx background-color--negative-10 px-2 py-1" style="--fxb: 100%;">equal two</div>
                    <div class="fx background-color--negative-10 px-2 py-1" style="--fxb: 100%;">equal three</div>
                </div>
                <div class="d-flex {containerClasses} g-2 background-color--negative-10 p-2" style="width: {containerWidth}%;">
                    <div class="fx background-color--negative-10 px-2 py-1" style="--fxb: 25%">fb 25% one</div>
                    <div class="background-color--negative-10 px-2 py-1">simple two</div>
                    <div class="background-color--negative-10 px-2 py-1">simple three</div>
                </div>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="d-flex">
    <div class="fb-${flexBasis}">fb-${flexBasis} one</div>
    <div>simple two</div>
    <div>simple three</div>
</div>
<div class="d-flex">
    <div class="fx" style="--fxb: 100%;">equal one</div>
    <div class="fx" style="--fxb: 100%;">equal two</div>
    <div class="fx" style="--fxb: 100%;">equal three</div>
</div>
<div class="d-flex">
    <div class="fx" style="--fxb: 25%">fb 25% one</div>
    <div>simple two</div>
    <div>simple three</div>
</div>
`
                }
            </Precode>
        </div>
    </div>
</div>