<script>
    import Precode from 'component/Precode.svelte'

    let flexDirectionsArr = ['row', 'row-reverse', 'column', 'column-reverse']
</script>

<section>
    <h3 id="direction">Direction</h3>
    <p>
        The <b>fd-{flexDirectionsArr.join('/')}</b> classes sets direction of an elements into a flex container.
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid g-3 p-3 bgc-positive br-md">
                {#each flexDirectionsArr as direction }
                    <div class="d-flex fd-{direction} g-2 bgc-negative-10 p-2">
                        <div class="bgc-negative-10 px-2 py-1">one</div>
                        <div class="bgc-negative-10 px-2 py-1">two</div>
                        <div class="bgc-negative-10 px-2 py-1">three</div>
                    </div>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {#each flexDirectionsArr as direction}
                    {
`<div class="d-flex fd-${direction}">
    // ...
</div>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</section>