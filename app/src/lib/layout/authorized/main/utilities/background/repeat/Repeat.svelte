<script>
    import Precode from 'component/Precode.svelte'

    let bgRepeatObj = {
            'default': '',
            'repeat-x': '-x',
            'repeat-y': '-y',
            'space': '-space',
            'round': '-round',
            'no-repeat': '-no'
        },
        bgRepeat = 'default'
</script>

<section>
    <h3 id="backgroundRepeat">Repeat</h3>
    <p>
        Add the <b>bgr{Object.values(bgRepeatObj).slice(1).join('/')}</b> classes to container to work with background-position.
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Sizes</b>
            <div class="d-flex fw-wrap g-3 ai-center">
                {#each Object.entries(bgRepeatObj) as [key, value]}
                    <button
                        on:click={() => bgRepeat = key}
                        class="btn {value}"
                        class:active = {bgRepeat === key}
                        type="button"
                        disabled = {bgRepeat === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid g-3 p-3 bgc-positive br-md">
                <div
                    class="bgi bgc-negative-10 bgr{bgRepeatObj[bgRepeat]} bgs ar-16_9"
                    style="--bgi: url(/images/logo.svg); --bgs: 10em auto"
                ></div>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="bgi bgr${bgRepeatObj[bgRepeat]}" style="--bgi: url(...)">
    // ...
</div>
`
                }
            </Precode>
        </div>
    </div>
</section>