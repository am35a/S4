<script>
    import Precode from 'component/Precode.svelte'

    let aspectRatioArr = ['1/1', '4/3', '3/4', '16/9', '9/16', '16/10', '10/16', '21/9', '9/21', '32/9', '9/32'],
        aspectRatio = aspectRatioArr[0]
</script>

<section>
    <h3 id="aspectRatio">Aspect ratio</h3>
    <p>
        The aspect ratio is set by the <b>aspect-ratio--...</b>. Variables <b>--aspect-ratio</b> are also
        available to set for different device type.
    </p>
    <div class="display--grid g-5">
        <div class="display--grid g-4">
            <b>Aspect ratio</b>
            <div class="display--inline-flex flex-wrap--wrap g-3">
                {#each aspectRatioArr as values }
                    <button
                        class="btn"
                        class:active={aspectRatio === values}
                        on:click={() => aspectRatio = values}
                        disabled={aspectRatio === values}
                    >{values}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="display--grid g-3 p-3 background-color--positive border-radius--md">
                <div class="
                        background-color--negative-10
                        mx-auto
                        px-2
                        py-1
                        width--50 p_width--100
                        aspect-ratio--{aspectRatio.replace('/', '_')}
                    "
                ></div>
            </div>
        </div>
        <div class="display--grid g-4">
            <b>HTML</b>
            <Precode class="border-radius--top-0">
                {
`<div class="aspect-ratio--${aspectRatio.replace('/', '_')}"> ... </div>
`
                }
            </Precode>
        </div>
    </div>
</section>