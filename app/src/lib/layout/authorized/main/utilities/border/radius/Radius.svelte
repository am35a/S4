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
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <div class="display--flex flex-wrap--wrap gap--xs">
                    {#each radiusSizesArr as item}
                        <div
                            class="background-color--negative-10 padding--xs border-radius--{item} text-align--center aspect-ratio--4_3 width"
                            style="--width: 6em"
                        >{item}</div>
                    {/each}
                </div>
            </div>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <div class="display--flex flex-wrap--wrap gap--md">
                    <div>
                        <div
                            class="background-color--negative-10 padding--xs border-radius--oval text-align--center width"
                            style="--width: 6em"
                        >oval</div>
                    </div>
                    <div>
                        <div
                            class="background-color--negative-10 padding--xs border-radius--pill text-align--center width"
                            style="--width: 6em"
                        >pill</div>
                    </div>
                </div>
            </div>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <div class="display--flex flex-wrap--wrap gap--md">
                    <div
                        class="background-color--negative-10 padding--xs border-radius--oval border-top-left-radius--sm text-align--center aspect-ratio--4_3 width"
                        style="--width: 6em"
                    >top left</div>
                    <div
                        class="background-color--negative-10 padding--xs border-radius--pill border-top-right-radius--xl text-align--center aspect-ratio--4_3 width"
                        style="--width: 6em"
                    >top right</div>
                    <div
                        class="background-color--negative-10 padding--xs border-bottom-right-radius--pill text-align--center aspect-ratio--4_3 width"
                        style="--width: 6em"
                    >bottom right</div>
                    <div
                        class="background-color--negative-10 padding--xs border-radius--xxxl border-bottom-left-radius--none text-align--center aspect-ratio--4_3 width"
                        style="--width: 6em"
                    >bottom left</div>
                </div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
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