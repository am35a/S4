<script>
    import Precode from 'component/Precode.svelte'

    let placementObj =  {
            left: 'l',
            top: 't',
            right: 'r',
            bottom: 'b'
        },
        placement = placementObj.left
</script>

<section>
    <h3 id="placement">Placement</h3>
    <p>
        The <b>{Object.values(placementObj).join('/')}</b> sets the horizontal and/or vertical position of
        a positioned element. To fine-tune positioning, you can use variables <b>--{Object.values(placementObj).join('/--')}</b> that are adaptive.
    </p>
    <div class="display--grid g-5">
        <div class="display--grid g-4">
            <b>Position</b>
            <div class="display--inline-flex flex-wrap--wrap g-3">
                {#each Object.entries(placementObj) as [key, value]}
                    <button
                        class="btn"
                        class:active={placement === value}
                        on:click={() => placement = value}
                        disabled={placement === value}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="p-6 background-color--positive border-radius--md overflow--hidden">
                <div class="p-relative background-color--negative-10 h" style="--h: 10em">
                    <div class="p-absolute background-color--negative-10 px-2 py-1 {placement}-0">0%</div>
                    <div class="p-absolute background-color--negative-10 px-2 py-1 {placement}-50">50%</div>
                    <div class="p-absolute background-color--negative-10 px-2 py-1 {placement}-100">100%</div>
                </div>
            </div>
        </div>
        <div class="display--grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="p-relative">
    <div class="p-absolute ${placement}-0">0%</div>
    <div class="p-absolute ${placement}-50">50%</div>
    <div class="p-absolute ${placement}-100">100%</div>
</div>
`
                }
            </Precode>
        </div>
    </div>
</section>