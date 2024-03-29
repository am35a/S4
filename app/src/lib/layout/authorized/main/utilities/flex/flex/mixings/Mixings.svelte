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
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Customize container</b>
            <input
                class="frm"
                bind:value={containerClasses}
                type="text"
                placeholder="Type utility classes to customizing the container"
            >
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <div class="display--grid margin-bottom--xs">
                    <label for="mixContainerWidth" class="display--grid grid-template-columns--3 align-items--end padding-x--xs">
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
                <div class="display--flex {containerClasses} gap--xs background-color--negative-10 padding--xs overflow-x--hidden width" style="--width: {containerWidth}%">
                    <div class="flex background-color--negative-10 padding-x--xs padding-y--xxs" style="--flex-grow: 1; --flex-shrink: 1; --flex-basis: 25em;">one</div>
                    <div class="flex background-color--negative-10 padding-x--xs padding-y--xxs" style="--flex-grow: 2; --flex-shrink: 2; --flex-basis: 25em;">two</div>
                </div>
                <div class="display--flex {containerClasses} gap--xs background-color--negative-10 padding--xs width" style="--width: {containerWidth}%">
                    <div class="flex background-color--negative-10 padding-x--xs padding-y--xxs" style="--flex-grow: 1; --flex-basis: 0; ">equal</div>
                    <div class="flex background-color--negative-10 padding-x--xs padding-y--xxs" style="--flex-grow: 1; --flex-basis: 0; ">equal</div>
                    <div class="flex background-color--negative-10 padding-x--xs padding-y--xxs" style="--flex-grow: 1; --flex-basis: 0; ">equal</div>
                </div>
                <div class="display--flex {containerClasses} gap--xs background-color--negative-10 padding--xs width" style="--width: {containerWidth}%">
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs width--100">one</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs flex" style="--flex-shrink: 0;">shrink 0 two</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">three</div>
                </div>
            </div>
        </div>
        <div class="display--grid gap--md">
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
    <div class="width--100">one</div>
    <div class="flex" style="--flex-shrink: 0;">shrink 0 two</div>
    <div>three</div>
</div>
`
                }
            </Precode>
        </div>
    </div>
</div>