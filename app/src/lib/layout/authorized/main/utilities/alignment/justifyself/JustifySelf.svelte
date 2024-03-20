<script>
    import Precode from 'component/Precode.svelte'

    let justifySelfArr = [ 'center', 'end', 'start', 'stretch' ]
</script>

<section>
    <h3 id="justifySelf">Justify self</h3>
    <p>
        The <b>justify-self--{Object.values(justifySelfArr).join('/')}</b> utilities sets the way a box is
        justified inside its alignment container along the appropriate axis.
    </p>
    <div class="display--grid g-5">
        <div class="alert alert-warning justify-self--start">
            <span class="ico fs-xl" style="--ico-image: url(/icons/alert-triangle.svg)"></span>
            The properties works only for <b>grid</b> containers!
        </div>
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="display--grid g-3 p-3 background-color--positive border-radius--md">
                {#each justifySelfArr as item }
                    <div class="display--grid grid-template-columns--2 g-2 background-color--negative-10 p-2">
                        <div class="background-color--negative-10 px-2 py-1 justify-self--{item}">one</div>
                        <div class="background-color--negative-10 px-2 py-1">two</div>
                        <div class="background-color--negative-10 px-2 py-1">three</div>
                    </div>
                {/each}
            </div>
        </div>
        <div class="display--grid g-4">
            <b>HTML</b>
            <Precode>
                {#each justifySelfArr as item }
                    {
`<div class="display--grid">
    <div class="justify-self--${item}">one</div>
    ...
</div>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</section>