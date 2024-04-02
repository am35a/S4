<script>
    import Precode from 'component/Precode.svelte'

    let directionsArr = ['row', 'row-reverse', 'column', 'column-reverse']
</script>

<section>
    <h3 id="direction">Direction</h3>
    <p>
        The <b>flex-direction--{directionsArr.join('/')}</b> classes sets direction of an elements into a flex container.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                {#each directionsArr as direction}
                    <div class="display--flex flex-direction--{direction} gap--xs background-color--negative-10 padding--xs">
                        <div class="background-color--negative-10 padding-x--xs padding-y--xxs">one</div>
                        <div class="background-color--negative-10 padding-x--xs padding-y--xxs">two</div>
                        <div class="background-color--negative-10 padding-x--xs padding-y--xxs">three</div>
                    </div>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
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