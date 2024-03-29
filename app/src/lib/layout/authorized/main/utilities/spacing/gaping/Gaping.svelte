<script>
    import Precode from 'component/Precode.svelte'

    let spacingSizesArr = ['none', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
        spaceSize = spacingSizesArr[4]
</script>

<section>
    <h3 id="gaping">Gaping</h3>
    <!-- <p>
        ...
    </p> -->
    <div class="display--grid gap--lg">
        <b>Size</b>
        <div class="display--inline-flex flex-wrap--wrap gap--sm">
            {#each spacingSizesArr as value, i}
                <button
                    class="btn"
                    class:active={spaceSize === value}
                    on:click={() => spaceSize = spacingSizesArr[i]}
                    disabled={spaceSize === value}
                >{value}</button>
            {/each}
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <div class="background-color--negative-10 display--grid grid-template-columns--3 gap--{spaceSize}">
                    {#each {length: 9} as _}
                        <div class="background-color--negative-10 padding-y--xxl"></div>
                    {/each}
                </div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>HTML</b>
            <Precode>
                {
`<div class="gap--${spaceSize}">
    ...
</div>
`
                }
            </Precode>
        </div>
    </div>
</section>