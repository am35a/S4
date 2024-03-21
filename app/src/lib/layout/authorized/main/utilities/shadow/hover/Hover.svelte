<script>
    import Precode from 'component/Precode.svelte'
</script>
<section>
    <h3 id="hover">Hover</h3>
    <p>
        To change the size or add box shadow by hover, just add <b>:hover</b> to any
        <b>box-shadow--...</b> class.
    </p>
    <div class="display--grid g-5">
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="display--grid g-3 p-3 background-color--positive border-radius--md">
                <div class="p-4 box-shadow--md:hover">
                    box-shadow--md:hover
                </div>
            </div>
        </div>        
        <div class="display--grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="box-shadow--lg:hover"> ... </div>
`
                }
            </Precode>
        </div>
    </div>
</section>