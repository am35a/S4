<script>
    import Precode from 'component/Precode.svelte'

    let sidesArr = ['top', 'right', 'bottom', 'left'],
        stylesObj = {
            Dotted: 'dotted',
            Dashed: 'dashed',
            Solid: 'solid'
        }
</script>

<section>
    <h3 id="style">Style</h3>
    <p>
        The <b>border-style--{Object.values(stylesObj).join('/')}</b> classes set the border styles for all
        sides. To remove styles use classes <b>border-...--none</b>. To side change border style add one of
        the <b>border-{sidesArr.join('/')}-style--...</b> classes.
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid g-3 p-3 background-color--positive border-radius--md">
                <div class="d-flex fw-wrap g-2 align-items--baseline">
                    {#each Object.entries(stylesObj) as [key, value]}
                        <div class="background-color--negative-10 p-4 border-width--medium border-style--{value}"
                        >{key}</div>
                    {/each}
                </div>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {#each Object.entries(stylesObj) as [key, value]}
                    {
`<div class="border-width--medium border-style--${value}"
>${key}</div>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</section>