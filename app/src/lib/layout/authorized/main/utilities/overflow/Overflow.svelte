<script>
    import Precode from 'component/Precode.svelte'

    let propertiesArr = ['auto', 'hidden', 'visible', 'scroll'],
        property = propertiesArr[0]
</script>

<section>
    <h2 class="overflow">Overflow</h2>
    <p>
        The overflow property allow to clip content, set render scrollbars or how to just display content
        when it overflows its block level container. All of the properties classes support axes
        <b>...--x-...</b> and <b>...--y-...</b>. All classes of overflow can be combine, like
        <b>overflow--x-hidden</b> with <b>overflow--y-scroll</b>.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Property</b>
            <div class="display--flex flex-wrap--wrap gap--xs">
                {#each propertiesArr as values }
                    <button
                        class="btn"
                        class:active={property === values}
                        on:click={() => property = values}
                        disabled={property === values}
                    >{values}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <div
                    class="overflow--{property} margin-x--auto background-color--negative-10 padding--xs width height"
                    style="--width: 24em; --height: 16em;"
                >
                    The Lancia Delta S4 is a Group B rally car manufactured by the Italian car company Lancia.
                    The Delta S4 competed in the World Rally Championship in 1985 and 1986, until Group B
                    class was disbanded and the cars were eventually banned from competition completely by
                    European sanctioning body FIA. The car replaced, and was an evolution of the 037. The S4
                    took full advantage of the Group B regulations, and featured a midship-mounted engine and
                    all-wheel drive for superior traction on loose surfaces. A total of 28 complete chassis
                    were manufactured.
                </div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>HTML</b>
            <Precode>
                {
`<div class="overflow--${property}"> ... </div>
`
                }
            </Precode>
        </div>
    </div>
</section>