<script>
    import Precode from 'component/Precode.svelte'

    let directionsArr = ['row', 'row-reverse', 'column', 'column-reverse']
</script>

<section>
    <h3 id="direction">Direction</h3>
    <p>
        The <b>flex-direction--{directionsArr.join('/')}</b> classes sets direction of an elements into a flex container.
    </p>
    <div class="display--grid g-5">
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="display--grid g-3 p-3 background-color--positive border-radius--md">
                {#each directionsArr as direction}
                    <div class="display--flex flex-direction--{direction} g-2 background-color--negative-10 p-2">
                        <div class="background-color--negative-10 px-2 py-1">one</div>
                        <div class="background-color--negative-10 px-2 py-1">two</div>
                        <div class="background-color--negative-10 px-2 py-1">three</div>
                    </div>
                {/each}
            </div>
        </div>
        <div class="display--grid g-4">
            <b>HTML</b>
            <Precode>
                {#each directionsArr as direction}
                    {
`<div class="display--flex flex-direction--${direction}"> ... </div>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</section>