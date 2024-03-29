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
    <div class="display--grid gap--lg">
        <div class="alert alert-info justify-self--start">
            <span class="ico" style="--ico-image: url(/icons/info-circle.svg);"></span>
            Pay attentions! The <b>--border-style</b> variable of <b>border</b>, <b>border-style</b>,
            <b>border-...</b>, <b>border-...-style</b>  is adaptive. The list of prefixes available on the
            <a href="/core#map">Core</a> page.
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <div class="display--flex flex-wrap--wrap gap--xs align-items--baseline">
                    {#each Object.entries(stylesObj) as [key, value]}
                        <div class="background-color--negative-10 padding--md border-width--medium border-style--{value}"
                        >{key}</div>
                    {/each}
                </div>
            </div>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <div class="display--flex flex-wrap--wrap gap--xs align-items--baseline">
                    <div class="background-color--negative-10 padding--md
                        border-width--medium
                        border-left-width--thick
                        border-style--solid
                        border-right-style--dotted
                        border-left-style--none"
                    >mixed</div>
                </div>
            </div>
        </div>
        <div class="display--grid gap--md">
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