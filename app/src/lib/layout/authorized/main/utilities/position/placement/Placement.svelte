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
    <div class="display--grid g-5">
        <div class="display--grid g-4">
            <b>Position</b>
            <div class="display--inline-flex flex-wrap--wrap g-3">
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
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="p-6 background-color--positive border-radius--md overflow--hidden">
                <div class="position--relative background-color--negative-10 height" style="--height: 10em">
                    <div class="position--absolute background-color--negative-10 px-2 py-1 {place}--0">0%</div>
                    <div class="position--absolute background-color--negative-10 px-2 py-1 {place}--50">50%</div>
                    <div class="position--absolute background-color--negative-10 px-2 py-1 {place}--100">100%</div>
                </div>
            </div>
        </div>
        <div class="display--grid g-4">
            <b>HTML</b>
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