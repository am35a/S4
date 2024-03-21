<script>
    import Precode from 'component/Precode.svelte'

    let overflowPropertyArr = ['auto', 'hidden', 'visible', 'scroll'],
        overflowProperty = overflowPropertyArr[0]
</script>

<section>
    <h2 class="overflow">Overflow</h2>
    <p>
        The overflow property allow to clip content, set render scrollbars or how to just display content when it overflows its block level container.
    </p>
    <div class="display--grid g-5">
        <div class="display--grid g-4">
            <b>Line height</b>
            <div class="display--flex flex-wrap--wrap g-2">
                {#each overflowPropertyArr as values }
                    <button
                        class="btn"
                        class:active={overflowProperty === values}
                        on:click={() => overflowProperty = values}
                        disabled={overflowProperty === values}
                    >{values}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="display--grid g-3 p-3 background-color--positive border-radius--md">
                <div
                    class="overflow--{overflowProperty} mx-auto background-color--negative-10 p-2 w h"
                    style="--w: 24em; --h: 16em;"
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
        <div class="display--grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="overflow--${overflowProperty}> ... </div>
`
                }
            </Precode>
        </div>
    </div>
</section>