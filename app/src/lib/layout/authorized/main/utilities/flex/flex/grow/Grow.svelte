<script>
    import Precode from 'component/Precode.svelte'

    let containerClasses = 'overflow--hidden flex-wrap--wrap',
        containerWidth = 100
</script>

<div>
    <h4 id="grow">Grow</h4>
    <p>
        Growth settings will available after adding the <b>flex-grow--1</b> class to the elements in a flex
        container. There is an additional option via the <b>flex</b> class and the <b>--flex-grow</b> variable
        to control flexible growth.
    </p>
    <div class="display--grid gap--lg">
        <div class="alert alert-info justify-self--start">
            <span class="ico" style="--ico-image: url(/icons/info-circle.svg);"></span>
            Default value of <b>flex-grow</b> is <b>0</b>. Class <b>flex-grow--1</b> convert value to 1.
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
                    <label for="growContainerWidth" class="display--grid grid-template-columns--3 align-items--end padding-x--xs">
                        <small class="text-align--start">min</small>
                        <div class="text-align--center">Width {containerWidth}%</div>
                        <small class="text-align--end">max</small>
                    </label>
                    <input
                        class="frm"
                        id="growContainerWidth"
                        min={0}
                        max={100}
                        step={1}
                        bind:value={containerWidth}
                        type="range"
                    >
                </div>
                <div class="display--flex {containerClasses} gap--xs background-color--negative-10 padding--xs" style="width: {containerWidth}%;">
                    <div class="flex-grow--1 background-color--negative-10 padding-x--xs padding-y--xxs">one</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">two</div>
                    <div class="flex-grow--1 background-color--negative-10 padding-x--xs padding-y--xxs">three</div>
                </div>
                <div class="display--flex {containerClasses} gap--xs background-color--negative-10 padding--xs" style="width: {containerWidth}%;">
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">one</div>
                    <div class="flex-grow--1 background-color--negative-10 padding-x--xs padding-y--xxs">two</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">three</div>
                </div>
                <div class="display--flex {containerClasses} gap--xs background-color--negative-10 padding--xs" style="width: {containerWidth}%;">
                    <div class="flex-grow--1 background-color--negative-10 padding-x--xs padding-y--xxs">one</div>
                    <div class="flex-grow--1 background-color--negative-10 padding-x--xs padding-y--xxs">two</div>
                    <div class="flex-grow--1 background-color--negative-10 padding-x--xs padding-y--xxs">three</div>
                </div>
                <div class="display--flex {containerClasses} gap--xs background-color--negative-10 padding--xs" style="width: {containerWidth}%;">
                    <div class="flex background-color--negative-10 padding-x--xs padding-y--xxs" style="--flex-grow: 1">one</div>
                    <div class="flex background-color--negative-10 padding-x--xs padding-y--xxs" style="--flex-grow: 2">two</div>
                    <div class="flex background-color--negative-10 padding-x--xs padding-y--xxs" style="--flex-grow: 3">three</div>
                </div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
            <Precode>
                {
`<div class="display--flex">
    <div class="flex-grow--1">one</div>
    <div>simple two</div>
    <div class="flex-grow--1">three</div>
</div>
<div class="display--flex">
    <div>simple one</div>
    <div class="flex-grow--1">two</div>
    <div>simple three</div>
</div>
<div class="display--flex">
    <div class="flex-grow--1">one</div>
    <div class="flex-grow--1">two</div>
    <div class="flex-grow--1">three</div>
</div>
<div class="display--flex">
    <div class="flex" style="--flex-grow: 1">one</div>
    <div class="flex" style="--flex-grow: 2">two</div>
    <div class="flex" style="--flex-grow: 3">three</div>
</div>
`
                }
            </Precode>
        </div>
    </div>    
</div>