<script>
    import Precode from 'component/Precode.svelte'

    let containerClasses = ''
    let containerWidth = 100
</script>

<div>
    <h4 id="mixings">Mixings</h4>
    <p>
        Mixing of using the flex container.
    </p>
    <div class="display--grid g-5">
        <div class="display--grid g-4">
            <b>Customize container</b>
            <input
                class="frm"
                bind:value={containerClasses}
                type="text"
                placeholder="Type utility classes to customizing the container"
            >
        </div>
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="display--grid g-3 p-3 background-color--positive border-radius--md">
                <div class="display--grid mb-2">
                    <label for="mixContainerWidth" class="display--grid grid-template-columns--3 align-items--end px-2">
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
                <div class="display--flex {containerClasses} g-2 background-color--negative-10 p-2 ox-hidden w" style="--w: {containerWidth}%">
                    <div class="flex background-color--negative-10 px-2 py-1" style="--flex-grow: 1; --flex-shrink: 1; --flex-basis: 25em;">one</div>
                    <div class="flex background-color--negative-10 px-2 py-1" style="--flex-grow: 2; --flex-shrink: 2; --flex-basis: 25em;">two</div>
                </div>
                <div class="display--flex {containerClasses} g-2 background-color--negative-10 p-2 w" style="--w: {containerWidth}%">
                    <div class="flex background-color--negative-10 px-2 py-1" style="--flex-grow: 1; --flex-basis: 0; ">equal</div>
                    <div class="flex background-color--negative-10 px-2 py-1" style="--flex-grow: 1; --flex-basis: 0; ">equal</div>
                    <div class="flex background-color--negative-10 px-2 py-1" style="--flex-grow: 1; --flex-basis: 0; ">equal</div>
                </div>
                <div class="display--flex {containerClasses} g-2 background-color--negative-10 p-2 w" style="--w: {containerWidth}%">
                    <div class="background-color--negative-10 px-2 py-1 w-100">one</div>
                    <div class="background-color--negative-10 px-2 py-1 flex" style="--flex-shrink: 0;">shrink 0 two</div>
                    <div class="background-color--negative-10 px-2 py-1">three</div>
                </div>
            </div>
        </div>
        <div class="display--grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="display--flex">
    <div class="flex" style="--flex-grow: 1; --flex-shrink: 1; --flex-basis: 25em;">two</div>
    <div class="flex" style="--flex-grow: 2; --flex-shrink: 2; --flex-basis: 25em;">three</div>
</div>
<div class="display--flex">
    <div class="flex" style="--flex-grow: 1; --flex-basis: 0; ">equal</div>
    <div class="flex" style="--flex-grow: 1; --flex-basis: 0; ">equal</div>
    <div class="flex" style="--flex-grow: 1; --flex-basis: 0; ">equal</div>
</div>
<div class="display--flex">
    <div class="w-100">one</div>
    <div class="flex" style="--flex-shrink: 0;">shrink 0 two</div>
    <div>three</div>
</div>
`
                }
            </Precode>
        </div>
    </div>
</div>