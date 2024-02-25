<script>
    import Precode from 'component/Precode.svelte'

    let containerClasses = '',
        containerWidth = 100,
        isCellShrinked = true
</script>

<div>
    <h4 id="flexShrink">Shrink</h4>
    <p>
        Shrink settings are available by default. To disable shrink add the <b>fs-0</b> class to the elements
        in a flex container. There is an additional option via the <b>fx</b> class and the <b>--fxs</b>
        variable to control flexible shrink.
    </p>
    <div class="d-grid g-5">
        <div class="alert alert-info js-start">
            <span class="ico" style="--ico-image: url(/icons/info-circle.svg);"></span>
            Default value of <b>flex-shrink</b> is <b>1</b>. Class <b>fs-0</b> convert value to <b>0</b>.
        </div>
        <div class="d-grid g-4">
            <b>Shrink</b>
            <div class="d-inline-flex fw-wrap g-3">
                <button
                    class="btn"
                    class:active = {isCellShrinked}
                    on:click = {() => isCellShrinked = !isCellShrinked}
                    disabled = {isCellShrinked}
                >default</button>
                <button
                    class="btn"
                    class:active = {!isCellShrinked}
                    on:click = {() => isCellShrinked = !isCellShrinked}
                    disabled = {!isCellShrinked}
                >fs-0</button>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Customize container</b>
            <div class="d-grid">
                <input
                    class="frm"
                    bind:value={containerClasses}
                    type="text"
                    placeholder="Type utility classes to customizing the container"
                >
                <div class="fs-sm">
                    Try the <b>o-hidden</b> and <b>fw-wrap</b> to view dependence
                    container and items inside it.
                </div>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid g-3 p-3 bgc-positive br">
                <div class="d-grid mb-2">
                    <label for="shrinkContainerWidth" class="d-grid gtc-3 ai-end px-2">
                        <small class="ta-start">min</small>
                        <div class="ta-center">Width {containerWidth}%</div>
                        <small class="ta-end">max</small>
                    </label>
                    <input
                        class="frm"
                        id="shrinkContainerWidth"
                        min={0}
                        max={100}
                        step={1}
                        bind:value={containerWidth}
                        type="range"
                    >
                </div>    
                <div class="d-flex {containerClasses} g-2 bgc-negative-10 p-2 w" style="--w: {containerWidth}%">
                    {#each Array(6) as _, i}
                        <div
                            class="bgc-negative-10 px-2 py-1"
                            class:fs-0={!isCellShrinked}
                        >cell {isCellShrinked ? 'shrinked' : 'no shrink'}</div>
                    {/each}
                </div>
                <div class="d-flex {containerClasses} g-2 bgc-negative-10 p-2 ox-hidden w" style="--w: {containerWidth}%">
                    <div
                        class="bgc-negative-10 px-2 py-1 w"
                        style="--w: 10em;"
                    >1:1</div>
                    <div
                        class="fx bgc-negative-10 px-2 py-1 w"
                        style="--w: 10em; {isCellShrinked ? '--fxs: 2' : ''}"
                    >{isCellShrinked ? '1:2' : '1:1'}</div>
                    <div
                        class="fx bgc-negative-10 px-2 py-1 w"
                        style="--w: 10em; {isCellShrinked ? '--fxs: 3' : ''}"
                    >{isCellShrinked ? '1:3' : '1:1'}</div>
                </div>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="d-flex ${containerClasses}">
    <div ${isCellShrinked ? '' : 'class="fs-0"'}>cell ${isCellShrinked ? 'shrinked' : 'no shrink'}</div>
    // ...
</div>
<div class="d-flex ${containerClasses}">
    <div class="w" style="--w: 10em;">'1:1'</div>
    <div class="fx w" style="--w: 10em; ${isCellShrinked ? '--fxs: 2' : ''}">${isCellShrinked ? '1:2' : '1:1'}</div>
    <div class="fx w" style="--w: 10em; ${isCellShrinked ? '--fxs: 3' : ''}">${isCellShrinked ? '1:3' : '1:1'}</div>
</div>
`
                }
            </Precode>
        </div>
    </div>
</div>