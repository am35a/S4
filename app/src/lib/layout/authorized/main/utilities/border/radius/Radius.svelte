<script>
    import Precode from 'component/Precode.svelte'

    let radiusSizesArr = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
        radiusXtraSizes = ['oval', 'pill', 'none']
</script>

<section>
    <h3 id="radius">Radius</h3>
    <p>
        To add the default radius use the <b>br</b> class. For different round corners use the <b>border-radius--...</b> classes.
    </p>
    <div class="display--grid g-5">
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="display--grid g-3 p-3 background-color--positive border-radius--md">
                <div class="display--flex flex-wrap--wrap g-2">
                    {#each radiusSizesArr as item}
                        <div
                            class="background-color--negative-10 p-2 border-radius--{item} ta-center ar-4_3 w"
                            style="--w: 6em"
                        >{item}</div>
                    {/each}
                </div>
            </div>
            <div class="display--grid g-3 p-3 background-color--positive border-radius--md">
                <div class="display--flex flex-wrap--wrap g-4">
                    <div>
                        <div
                            class="background-color--negative-10 p-2 border-radius--oval ta-center w"
                            style="--w: 6em"
                        >oval</div>
                    </div>
                    <div>
                        <div
                            class="background-color--negative-10 p-2 border-radius--pill ta-center w"
                            style="--w: 6em"
                        >pill</div>
                    </div>
                </div>
            </div>
            <div class="display--grid g-3 p-3 background-color--positive border-radius--md">
                <div class="display--flex flex-wrap--wrap g-4">
                    <div
                        class="background-color--negative-10 p-2 border-radius--oval border-top-left-radius--sm ta-center ar-4_3 w"
                        style="--w: 6em"
                    >top left</div>
                    <div
                        class="background-color--negative-10 p-2 border-radius--pill border-top-right-radius--xl ta-center ar-4_3 w"
                        style="--w: 6em"
                    >top right</div>
                    <div
                        class="background-color--negative-10 p-2 border-bottom-right-radius--pill ta-center ar-4_3 w"
                        style="--w: 6em"
                    >bottom right</div>
                    <div
                        class="background-color--negative-10 p-2 border-radius--xxxl border-bottom-left-radius--none ta-center ar-4_3 w"
                        style="--w: 6em"
                    >bottom left</div>
                </div>
            </div>
        </div>
        <div class="display--grid g-4">
            <b>HTML</b>
            <Precode>
                {#each radiusSizesArr as item}
                    {
`<div class="border-radius--${item}">${item}</div>
`
                    }
                {/each}
            </Precode>
            <Precode>
                {#each radiusXtraSizes as item}
                    {
`<div class="border-radius--${item}">${item}</div>
`
                    }
                {/each}
            </Precode>
            <Precode>
                {
`<div class="border-radius--oval border-top-left-radius--sm">top left</div>
<div class="border-radius--pill border-top-right-radius--xl">top right</div>
<div class="border-bottom-right-radius--pill">right radius</div>
<div class="border-radius--xxxl border-bottom-left-radius--none">bottom left</div>
`
                }
            </Precode>
        </div>
    </div>
</section>