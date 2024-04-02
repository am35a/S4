<script>
    import Precode from 'component/Precode.svelte'

    let aspectRatioArr = ['1/1', '4/3', '3/4', '16/9', '9/16', '16/10', '10/16', '21/9', '9/21', '32/9', '9/32'],
        aspectRatio = aspectRatioArr[0],
        containerWidth = 25
</script>

<section>
    <h3 id="aspectRatio">Aspect ratio</h3>
    <p>
        The aspect ratio is set by the <b>aspect-ratio--...</b>. Variables <b>--aspect-ratio</b> are also
        available to set for different device type.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Aspect ratio</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
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
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <div class="display--grid margin-bottom--xs">
                    <label for="growContainerWidth" class="display--grid grid-template-columns--3 align-items--end padding-x--xs">
                        <small class="text-align--start">min</small>
                        <div class="text-align--center">Width {containerWidth}%</div>
                        <small class="text-align--end">max</small>
                    </label>
                    <input
                        class="frm"
                        id="growContainerWidth"
                        min={0}
                        max={100}
                        step={1}
                        bind:value={containerWidth}
                        type="range"
                    >
                </div>                
                <div class="
                        background-color--negative-10
                        padding-x--xs
                        padding-y--xxs
                        width p_width--100
                        aspect-ratio--{aspectRatio.replace('/', '_')}
                    "
                    style="--width:{containerWidth}%"
                ></div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
            <Precode>
                {
`<div class="aspect-ratio--${aspectRatio.replace('/', '_')}"> ... </div>
`
                }
            </Precode>
        </div>
    </div>
</section>