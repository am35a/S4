<script>
    import Precode from 'component/Precode.svelte'

    let containerClasses = ''
    let containerWidth = 100
</script>

<div>
    <h4 id="flexMixings">Mixings</h4>
    <p>
        Mixing of using the flex container.
    </p>
    <div class="d-grid g-5">
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
            <div class="d-grid g-3 p-3 background-color--positive br-md">
                <div class="d-grid mb-2">
                    <label for="mixContainerWidth" class="d-grid gtc-3 align-items--end px-2">
                        <small class="ta-start">min</small>
                        <div class="ta-center">Width {containerWidth}%</div>
                        <small class="ta-end">max</small>
                    </label>
                    <input
                        class="frm"
                        id="mixContainerWidth"
                        min={0}
                        max={100}
                        step={1}
                        bind:value={containerWidth}
                        type="range"
                    >
                </div>
                <div class="d-flex {containerClasses} g-2 background-color--negative-10 p-2 ox-hidden w" style="--w: {containerWidth}%">
                    <div class="fx background-color--negative-10 px-2 py-1" style="--fxg: 1; --fxs: 1; --fxb: 25em;">two</div>
                    <div class="fx background-color--negative-10 px-2 py-1" style="--fxg: 2; --fxs: 2; --fxb: 25em;">three</div>
                </div>
                <div class="d-flex {containerClasses} g-2 background-color--negative-10 p-2 w" style="--w: {containerWidth}%">
                    <div class="fx background-color--negative-10 px-2 py-1" style="--fxg: 1; --fxb: 0; ">equal one</div>
                    <div class="fx background-color--negative-10 px-2 py-1" style="--fxg: 1; --fxb: 0; ">equal two</div>
                    <div class="fx background-color--negative-10 px-2 py-1" style="--fxg: 1; --fxb: 0; ">equal three</div>
                </div>
                <div class="d-flex {containerClasses} g-2 background-color--negative-10 p-2 w" style="--w: {containerWidth}%">
                    <div class="background-color--negative-10 px-2 py-1 w-100">w-100 one</div>
                    <div class="background-color--negative-10 px-2 py-1 fx" style="--fxs: 0;">shrink-1 two</div>
                    <div class="background-color--negative-10 px-2 py-1">simple three</div>
                </div>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="d-flex">
    <div class="fx" style="--fxg: 1; --fxs: 1; --fxb: 25em;">two</div>
    <div class="fx" style="--fxg: 2; --fxs: 2; --fxb: 25em;">three</div>
</div>
<div class="d-flex">
    <div class="fx" style="--fxg: 1; --fxb: 0; ">equal one</div>
    <div class="fx" style="--fxg: 1; --fxb: 0; ">equal two</div>
    <div class="fx" style="--fxg: 1; --fxb: 0; ">equal three</div>
</div>
<div class="d-flex">
    <div class="w-100">w-100 one</div>
    <div class="fx" style="--fxs: 0;">shrinked two</div>
    <div>three</div>
</div>
`
                }
            </Precode>
        </div>
    </div>
</div>