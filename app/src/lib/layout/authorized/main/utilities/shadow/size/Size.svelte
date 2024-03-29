<script>
    import Precode from 'component/Precode.svelte'

    let shadowSizesArr = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']
</script>

<section>
    <h3 id="size">Size</h3>
    <p>
        To add shadows to elements use <b>box-shadow--...</b> classes. The <b>box-shadow--none</b> class
        remove shadow.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid grid-template-columns--2 p_grid-template-columns--1 gap--sm padding--sm background-color--positive border-radius--md">
                {#each shadowSizesArr as size}
                    <div class="background-color--positive padding--xs rounded box-shadow--{size}">
                        box-shadow--{size}
                    </div>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>HTML</b>
            <Precode>
                {#each shadowSizesArr as size}
                    {
`<div class="box-shadow--${size}"> ... </div>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</section>