<script>
    import Precode from 'component/Precode.svelte'

    let bgPositionsArr = ['top-left', 'top', 'top-right', 'left', 'center', 'righ','bottom-left', 'bottom', 'bottom-right']
</script>

<section>
    <h3 id="position">Position</h3>
    <p>
        Add the <b>background-position--{bgPositionsArr.join('/')}</b> classes to container to work with background-position.
    </p>
    <div class="display--grid gap--lg">
        <div class="alert alert-info justify-self--start">
            <span class="ico" style="--ico-image: url(/icons/info-circle.svg);"></span>
            Pay attentions! The <b>--background-image</b> variable is adaptive. The list of prefixes available on the <a href="/core#map">Core</a> page.
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid grid-template-columns--3 gap--sm padding--xs background-color--positive border-radius--md">
                {#each bgPositionsArr as position }
                    <div
                        class="background-image background-color--negative-10 background-position--{position} background-repeat--no background-size height"
                        style="--background-image: url(/images/logo.svg); --background-size: 4em auto; --height: 6em"
                    ></div>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
            <Precode>
                {#each bgPositionsArr as position }
                    {
`<div class="background-position--${position}">
    ...
</div>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</section>