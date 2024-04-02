<script>
    import Precode from 'component/Precode.svelte'

    let lineHeightArr = ['0', '1', 'normal', 'unset']
    let lineHeight = lineHeightArr[2]
</script>

<section>
    <h3 id="lineHeight">Line height</h3>
    <p>
        To change the <b>line-height</b> property, use the <b>line-height--0/1/unset/normal</b> classes.
        For necessary, able set a custom size variable <b>--lh</b> in the styles for the <b>lh</b> class.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Align</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
                {#each lineHeightArr as value}
                    <button
                        class="btn"
                        class:active={lineHeight === value}
                        on:click={() => lineHeight = value}
                        disabled={lineHeight === value}
                    >{value}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <div class="line-height--{lineHeight}">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus doloribus porro
                    eos quidem commodi vel accusantium odit ducimus tempore! Facilis, repellat commodi.
                    Unde, sapiente eum necessitatibus eveniet fugit corrupti cum.
                </div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
            <Precode>
                {
`<div class="line-height--${lineHeight}"> ... </div>
`
                }
            </Precode>
        </div>
    </div>
</section>