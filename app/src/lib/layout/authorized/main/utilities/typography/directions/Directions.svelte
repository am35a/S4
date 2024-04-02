<script>
    import Precode from 'component/Precode.svelte'

    let displaysArr = ['block', 'flex', 'grid'],
        display = displaysArr[0]

    let directionsObj = {
            '': 'Default',
            'direction--rtl': 'To left',
            'direction--ltr': 'To right'
        },
        direction = Object.keys(directionsObj)[0]
</script>

<section>
    <h3 id="direction">Direction</h3>
    <p>
        ...
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Display</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
                {#each displaysArr as values }
                    <button
                        class="btn"
                        class:active={display === values}
                        on:click={() => display = values}
                        disabled={display === values}
                    >{values}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Direction</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
                {#each Object.entries(directionsObj) as [key, value]}
                    <button
                        class="btn"
                        class:active={direction === key}
                        on:click={() => direction = key}
                        disabled={direction === key}
                    >{value}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <div class="{direction} display--{display} gap--xs background-color--negative-10 padding--xs">
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">one</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">two</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">three</div>
                </div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
            <Precode>
                {
`<div class="display--${display} ${direction}">
    ...
</div>
`
                }
            </Precode>
        </div>
    </div>
</section>