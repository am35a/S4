<script>
    import Precode from 'component/Precode.svelte'

    let placementArr = ['left', 'top', 'right', 'bottom'],
        place = placementArr[0]
</script>

<section>
    <h3 id="placement">Placement</h3>
    <p>
        The <b>{placementArr.join('/')}</b>classes are sets the horizontal and/or vertical position of
        a positioned element. To fine-tune positioning, you can use variables <b>--{placementArr.join('/--')}</b> that are adaptive.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Position</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
                {#each placementArr as value}
                    <button
                        class="btn"
                        class:active={place === value}
                        on:click={() => place = value}
                        disabled={place === value}
                    >{value}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="padding--xl background-color--positive border-radius--md overflow--hidden">
                <div class="position--relative background-color--negative-10 height" style="--height: 10em">
                    <div class="position--absolute background-color--negative-10 padding-x--xs padding-y--xxs {place}--0">0%</div>
                    <div class="position--absolute background-color--negative-10 padding-x--xs padding-y--xxs {place}--50">50%</div>
                    <div class="position--absolute background-color--negative-10 padding-x--xs padding-y--xxs {place}--100">100%</div>
                </div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
            <Precode>
                {
`<div class="position--relative">
    <div class="position--absolute ${place}--0">0%</div>
    <div class="position--absolute ${place}--50">50%</div>
    <div class="position--absolute ${place}--100">100%</div>
</div>
`
                }
            </Precode>
        </div>
    </div>
</section>