<script>
    import Precode from 'component/Precode.svelte'

    let containerClasses = '',
        containerWidth = 100,
        isCellShrinked = true
</script>

<div>
    <h4 id="shrink">Shrink</h4>
    <p>
        Shrink settings are available by default. To disable shrink add the <b>flex-shrink--0</b> class to
        the elements in a flex container. There is an additional option via the <b>flex</b> class and the
        <b>--flex-shrink</b> variable to control flexible shrink.
    </p>
    <div class="display--grid g-5">
        <div class="alert alert-info justify-self--start">
            <span class="ico" style="--ico-image: url(/icons/info-circle.svg);"></span>
            Default value of <b>flex-shrink</b> is <b>1</b>.
            Class <b>flex-shrink--0</b> convert value to <b>0</b>.
        </div>
        <div class="display--grid g-4">
            <b>Shrink</b>
            <div class="display--inline-flex flex-wrap--wrap g-3">
                <button
                    class="btn"
                    class:active={isCellShrinked}
                    on:click={() => isCellShrinked = !isCellShrinked}
                    disabled={isCellShrinked}
                >default</button>
                <button
                    class="btn"
                    class:active={!isCellShrinked}
                    on:click={() => isCellShrinked = !isCellShrinked}
                    disabled={!isCellShrinked}
                >flex-shrink--0</button>
            </div>
        </div>
        <div class="display--grid g-4">
            <b>Customize container</b>
            <div class="display--grid">
                <input
                    class="frm"
                    bind:value={containerClasses}
                    type="text"
                    placeholder="Type utility classes to customizing the container"
                >
                <div class="fs-sm">
                    Try the <b>o-hidden</b> and <b>flex-wrap--wrap</b> to view dependence
                    container and items inside it.
                </div>
            </div>
        </div>
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="display--grid g-3 p-3 background-color--positive border-radius--md">
                <div class="display--grid mb-2">
                    <label for="shrinkContainerWidth" class="display--grid grid-template-columns--3 align-items--end px-2">
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
                <div class="display--flex {containerClasses} g-2 background-color--negative-10 p-2 w" style="--w: {containerWidth}%">
                    {#each Array(6) as _, i}
                        <div
                            class="background-color--negative-10 px-2 py-1"
                            class:flex-shrink--0={!isCellShrinked}
                        >cell {isCellShrinked ? 'shrinked' : 'no shrink'}</div>
                    {/each}
                </div>
                <div class="display--flex {containerClasses} g-2 background-color--negative-10 p-2 ox-hidden w" style="--w: {containerWidth}%">
                    <div
                        class="background-color--negative-10 px-2 py-1 w"
                        style="--w: 10em;"
                    >1:1</div>
                    <div
                        class="flex background-color--negative-10 px-2 py-1 w"
                        style="--w: 10em; {isCellShrinked ? '--flex-shrink: 2' : ''}"
                    >{isCellShrinked ? '1:2' : '1:1'}</div>
                    <div
                        class="flex background-color--negative-10 px-2 py-1 w"
                        style="--w: 10em; {isCellShrinked ? '--flex-shrink: 3' : ''}"
                    >{isCellShrinked ? '1:3' : '1:1'}</div>
                </div>
            </div>
        </div>
        <div class="display--grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="display--flex ${containerClasses}">
    <div ${isCellShrinked ? '' : 'class="flex-shrink--0"'}>cell ${isCellShrinked ? 'shrinked' : 'no shrink'}</div>
    ...
</div>
<div class="display--flex ${containerClasses}">
    <div class="w" style="--w: 10em;">1:1</div>
    <div class="flex w" style="--w: 10em; ${isCellShrinked ? '--flex-shrink: 2' : ''}">${isCellShrinked ? '1:2' : '1:1'}</div>
    <div class="flex w" style="--w: 10em; ${isCellShrinked ? '--flex-shrink: 3' : ''}">${isCellShrinked ? '1:3' : '1:1'}</div>
</div>
`
                }
            </Precode>
        </div>
    </div>
</div>