<script>
    import Precode from 'component/Precode.svelte'
</script>
<section>
    <h3 id="hover">Hover</h3>
    <p>
        To change by hover the sizes or add box shadow, just add <b>:hover</b> to any <b>box-shadow--...</b>
        classes.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <div class="padding--md box-shadow--md:hover">
                    box-shadow--md:hover
                </div>
            </div>
        </div>        
        <div class="display--grid gap--md">
            <b>Code</b>
            <Precode>
                {
`<div class="box-shadow--lg:hover"> ... </div>
`
                }
            </Precode>
        </div>
    </div>
</section>