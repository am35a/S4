<script>
    import Precode from 'component/Precode.svelte'

    let shadowSizesArr = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']
</script>

<!-- добавить HOVER -->

<section>
    <h3 id="size">Size</h3>
    <p>
        To add shadows to elements use <b>box-shadow--...</b> classes. The <b>box-shadow--none</b> class remove shadow.
    </p>
    <div class="display--grid g-5">
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="display--grid grid-template-columns--2 p_grid-template-columns--1 g-3 p-3 background-color--positive border-radius--md">
                {#each shadowSizesArr as size}
                    <div class="background-color--positive p-2 rounded box-shadow--{size}">
                        box-shadow--{size}
                    </div>
                {/each}
            </div>
        </div>
        <div class="display--grid g-4">
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