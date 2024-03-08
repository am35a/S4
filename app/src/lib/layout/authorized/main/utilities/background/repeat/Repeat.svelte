<script>
    import Precode from 'component/Precode.svelte'

    let bgRepeatObj={
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
        Add the <b>background-repeat{Object.values(bgRepeatObj).slice(1).join('/')}</b> classes to container to work with background-position.
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Sizes</b>
            <div class="d-flex fw-wrap g-3 align-items--center">
                {#each Object.entries(bgRepeatObj) as [key, value]}
                    <button
                        on:click={() => bgRepeat = key}
                        class="btn {value}"
                        class:active={bgRepeat === key}
                        type="button"
                        disabled={bgRepeat === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid g-3 p-3 background-color--positive br-md">
                <div
                    class="background-image background-color--negative-10 background-repeat{bgRepeatObj[bgRepeat]} background-size ar-16_9"
                    style="--background-image: url(/images/logo.svg); --background-size: 10em auto"
                ></div>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="background-image background-repeat${bgRepeatObj[bgRepeat]}" style="--background-image: url(...)">
    // ...
</div>
`
                }
            </Precode>
        </div>
    </div>
</section>