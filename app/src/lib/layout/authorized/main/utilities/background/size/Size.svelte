<script>
    import Precode from 'component/Precode.svelte'
</script>

<section>
    <h3 id="size">Size</h3>
    <p>
        Add the <b>background-repeat--cover</b> or <b>background-size--contain</b> classes to container
        to change background size.
    </p>
    <div class="display--grid g-5">
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="display--grid grid-template-columns--2 p_grid-template-columns--1 g-3 p-3 background-color--positive border-radius--md">
                <div
                class="background-image background-color--negative-10 background-size--cover h"
                style="--background-image: url(/images/logo.svg); --h: 8em"
            ></div>
            <div
                class="background-image background-color--negative-10 background-size--contain h"
                style="--background-image: url(/images/logo.svg); --h: 8em"
            ></div>
            </div>
        </div>
        <div class="display--grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="background-size--cover"> ... </div>
<div class="background-size--contain"> ... </div>
`
                }
            </Precode>
        </div>
    </div>
</section>