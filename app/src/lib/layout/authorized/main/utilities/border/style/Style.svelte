<script>
    import Precode from 'component/Precode.svelte'

    let sidesArr = ['', 'top-', 'right-', 'bottom-', 'left-'],
        stylesObj = {
            None: 'none',
            Dotted: 'dotted',
            Dashed: 'dashed',
            Solid: 'solid'
        }
</script>

<section>
    <h3 id="style">Style</h3>
    <p>
        The
        <!-- <span class="d-grid">
            {#each sidesArr as side }
                <b>border-{side}style--{Object.values(stylesObj).slice(1).join('/')}</b>
            {/each}
        </span> -->
        <b>border-style--{Object.values(stylesObj).slice(1).join('/')}</b>
        classes set the border styles.
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