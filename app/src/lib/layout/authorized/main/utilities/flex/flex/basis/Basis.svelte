<script>
    import Precode from 'component/Precode.svelte'

    let basisArr = ['100', 'fit', 'max', 'min'],
        basis = basisArr[0]

    let containerClasses = '',
        containerWidth = 100
</script>

<div>
    <h4 id="basis">Basis</h4>
    <p>
        The <b>flex-basis--{basisArr.join('/')}</b> classes help to change width of items in a flex
        container. Also the basis set up avaliable after add <b>flex</b> class to elements into flex
        container ans using variable <b>--flex-basis</b> to manage width.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Basis</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
                {#each basisArr as values }
                    <button
                        class="btn"
                        class:active={basis === values}
                        on:click={() => basis = values}
                        disabled={basis === values}
                    >flex-basis--{values}</button>
                {/each}
            </div>
        </div>        
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
                    <label for="basisContainerWidth" class="display--grid grid-template-columns--3 align-items--end padding-x--xs">
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
                    <div class="display--flex {containerClasses} gap--xs background-color--negative-10 padding--xs" style="width: {containerWidth}%;">
                    <div class="flex-basis--{basis} background-color--negative-10 padding-x--xs padding-y--xxs">{basis} one</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">two</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">three</div>
                </div>
                <div class="display--flex {containerClasses} gap--xs background-color--negative-10 padding--xs" style="width: {containerWidth}%;">
                    <div class="flex background-color--negative-10 padding-x--xs padding-y--xxs" style="--flex-basis: 100%;">one</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">two</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">three</div>
                </div>
                <div class="display--flex {containerClasses} gap--xs background-color--negative-10 padding--xs" style="width: {containerWidth}%;">
                    <div class="flex background-color--negative-10 padding-x--xs padding-y--xxs" style="--flex-basis: 100%;">equal</div>
                    <div class="flex background-color--negative-10 padding-x--xs padding-y--xxs" style="--flex-basis: 100%;">equal</div>
                    <div class="flex background-color--negative-10 padding-x--xs padding-y--xxs" style="--flex-basis: 100%;">equal</div>
                </div>
                <div class="display--flex {containerClasses} gap--xs background-color--negative-10 padding--xs" style="width: {containerWidth}%;">
                    <div class="flex background-color--negative-10 padding-x--xs padding-y--xxs" style="--flex-basis: 25%">one</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">two</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">three</div>
                </div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>HTML</b>
            <Precode>
                {
`<div class="display--flex">
    <div class="flex-basis--${basis}">${basis} one</div>
    <div>simple two</div>
    <div>simple three</div>
</div>
<div class="display--flex">
    <div class="flex" style="--flex-basis: 100%;">equal one</div>
    <div class="flex" style="--flex-basis: 100%;">equal two</div>
    <div class="flex" style="--flex-basis: 100%;">equal three</div>
</div>
<div class="display--flex">
    <div class="flex" style="--flex-basis: 25%">25% one</div>
    <div>simple two</div>
    <div>simple three</div>
</div>
`
                }
            </Precode>
        </div>
    </div>
</div>