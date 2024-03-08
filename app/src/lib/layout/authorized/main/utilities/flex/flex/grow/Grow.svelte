<script>
    import Precode from 'component/Precode.svelte'

    let containerClasses = 'o-hidden fw-wrap',
        containerWidth = 100
</script>

<div>
    <h4 id="flexGrow">Grow</h4>
    <p>
        Growth settings are available after adding the <b>fg-1</b> class to the elements in a flex
        container. There is an additional option via the <b>fx</b> class and the <b>--fxg</b> variable
        to control flexible growth.
    </p>
    <div class="d-grid g-5">
        <div class="alert alert-info justify-self--start">
            <span class="ico" style="--ico-image: url(/icons/info-circle.svg);"></span>
            Default value of <b>flex-grow</b> is <b>0</b>. Class <b>fg-1</b> convert value to 1.
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
            <div class="d-grid g-3 p-3 background-color--positive br-md">
                <div class="d-grid mb-2">
                    <label for="growContainerWidth" class="d-grid gtc-3 align-items--end px-2">
                        <small class="ta-start">min</small>
                        <div class="ta-center">Width {containerWidth}%</div>
                        <small class="ta-end">max</small>
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
                <div class="d-flex {containerClasses} g-2 background-color--negative-10 p-2" style="width: {containerWidth}%;">
                    <div class="fg-1 background-color--negative-10 px-2 py-1">one</div>
                    <div class="background-color--negative-10 px-2 py-1">two</div>
                    <div class="fg-1 background-color--negative-10 px-2 py-1">three</div>
                </div>
                <div class="d-flex {containerClasses} g-2 background-color--negative-10 p-2" style="width: {containerWidth}%;">
                    <div class="background-color--negative-10 px-2 py-1">one</div>
                    <div class="fg-1 background-color--negative-10 px-2 py-1">two</div>
                    <div class="background-color--negative-10 px-2 py-1">three</div>
                </div>
                <div class="d-flex {containerClasses} g-2 background-color--negative-10 p-2" style="width: {containerWidth}%;">
                    <div class="fg-1 background-color--negative-10 px-2 py-1">one</div>
                    <div class="fg-1 background-color--negative-10 px-2 py-1">two</div>
                    <div class="fg-1 background-color--negative-10 px-2 py-1">three</div>
                </div>
                <div class="d-flex {containerClasses} g-2 background-color--negative-10 p-2" style="width: {containerWidth}%;">
                    <div class="fx background-color--negative-10 px-2 py-1" style="--fxg: 1">one</div>
                    <div class="fx background-color--negative-10 px-2 py-1" style="--fxg: 2">two</div>
                    <div class="fx background-color--negative-10 px-2 py-1" style="--fxg: 3">three</div>
                </div>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="d-flex">
    <div class="fg-1">one</div>
    <div>simple two</div>
    <div class="fg-1">three</div>
</div>
<div class="d-flex">
    <div>simple one</div>
    <div class="fg-1">two</div>
    <div>simple three</div>
</div>
<div class="d-flex">
    <div class="fg-1">one</div>
    <div class="fg-1">two</div>
    <div class="fg-1">three</div>
</div>
<div class="d-flex">
    <div class="fx" style="--fxg: 1">one</div>
    <div class="fx" style="--fxg: 2">two</div>
    <div class="fx" style="--fxg: 3">three</div>
</div>
`
                }
            </Precode>
        </div>
    </div>    
</div>