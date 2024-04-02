<script>
    import Precode from 'component/Precode.svelte'

    let repeatsObj={
            'default': '',
            'repeat-x': '--x',
            'repeat-y': '--y',
            'space': '--space',
            'round': '--round',
            'no-repeat': '--no'
        },
        repeat = 'default'
</script>

<section>
    <h3 id="repeat">Repeat</h3>
    <p>
        Add the <b>background-repeat{Object.values(repeatsObj).slice(1).join('/')}</b> classes to container to work with background-position.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Sizes</b>
            <div class="display--flex flex-wrap--wrap gap--sm align-items--center">
                {#each Object.entries(repeatsObj) as [key, value]}
                    <button
                        on:click={() => repeat = key}
                        class="btn {value}"
                        class:active={repeat === key}
                        type="button"
                        disabled={repeat === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <div
                    class="background-image background-color--negative-10 background-repeat{repeatsObj[repeat]} background-size aspect-ratio--16_9"
                    style="--background-image: url(/images/logo.svg); --background-size: 25% auto"
                ></div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
            <Precode>
                {
`<div
    class="background-image background-repeat${repeatsObj[repeat]}"
    style="--background-image: url(...)"
> ... </div>
`
                }
            </Precode>
        </div>
    </div>
</section>